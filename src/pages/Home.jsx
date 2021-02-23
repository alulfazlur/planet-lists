import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// component
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import Modal from "../components/Modal";
import AlertModal from "../components/AlertModal";

// actions
import {
  fetchPlanets,
  fetchPlanetsScroll,
  fetchPlanetDetails,
  searchPlanets,
} from "../stores/planets/planets.actions";

import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";

const Home = (props) => {
  const [pages, setPages] = useState(2);
  const [keyword, setKeyword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // dispatch
  const {
    fetchPlanets,
    fetchPlanetsScroll,
    fetchPlanetDetails,
    searchPlanets,
  } = props;

  // state
  const {
    planetLists,
    details,
    isLoading,
    isLoadingScroll,
    isLoadingSearch,
    isLoadingDetail,
    errorMessage,
  } = props;

  const fetchMoreData = () => {
    if (errorMessage == null) {
      fetchPlanetsScroll(pages);
      setTimeout(() => {
        setPages(pages + 1);
      }, 500);
    }
  };

  const onViewDetails = async (url) => {
    await fetchPlanetDetails(url);
    // setTimeout(() => setShowModal(true), 500);
    setShowModal(true)
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    if (keyword.length > 2) {
      setTimeout(() => searchPlanets(keyword), 500);
    } else if (!keyword.length) {
      fetchPlanets();
    }
  }, [keyword]);
  return (
    <div>
      <Header
        keyword={keyword}
        onChange={(v) => setKeyword(v.target.value)}
        isLoading={isLoadingSearch}
      />
      <Sidebar onClick={() => setShowAlert(true)}/>
      <div className="text-gray-700 h-full w-full mr-10">
        {showModal && (
          <Modal
            toggleModal={() => setShowModal(false)}
            isLoading={isLoadingDetail}
            details={details}
          />
        )}
        {showAlert && (
          <AlertModal
            toggleModal={() => setShowAlert(false)}
          />
        )}
        <div className="ml-32 pt-24 mr-10">
          {isLoading ? (
            <ClipLoader
              color={"black"}
              loading={isLoading}
              css={{ display: "block", margin: "0 auto", borderWidth: 3 }}
              size={150}
            />
          ) : (
            <InfiniteScroll
              dataLength={planetLists.length}
              next={fetchMoreData}
              hasMore={true}
              loader={
                isLoadingScroll ? (
                  <h4 className="text-center animate-pulse text-gray-900 mb-10">
                    Loading...
                  </h4>
                ) : null
              }
            >
              <Table data={planetLists} viewDetail={onViewDetails} />
            </InfiniteScroll>
          )}
        </div>
      </div>
    </div>
  );
};

const stateProps = (state) => {
  return {
    planetLists: state.planetsState.planets,
    details: state.planetsState.details,
    isLoading: state.planetsState.isLoading,
    isLoadingScroll: state.planetsState.isLoadingScroll,
    isLoadingDetail: state.planetsState.isLoadingDetail,
    isLoadingSearch: state.planetsState.isLoadingSearch,
    errorMessage: state.planetsState.errorMessage,
  };
};
const dispatchProps = {
  fetchPlanets,
  fetchPlanetsScroll,
  fetchPlanetDetails,
  searchPlanets,
};
export default connect(stateProps, dispatchProps)(Home);
