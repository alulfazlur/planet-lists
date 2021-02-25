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
  addPlanets,
  editPlanets,
} from "../stores/planets/planets.actions";

import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";

const Home = (props) => {
  const [pages, setPages] = useState(2);
  const [keyword, setKeyword] = useState("");
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // dispatch
  const {
    fetchPlanets,
    fetchPlanetsScroll,
    fetchPlanetDetails,
    searchPlanets,
    addPlanets,
    editPlanets,
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
    setShowModal(true);
  };

  const onSubmitEdit = (url) => {
    editPlanets(name, url);
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
      <Sidebar onClick={() => setShowAlert(true)} />
      <div className="text-gray-700 h-full w-full mr-10">
        {showModal && (
          <Modal
            toggleModal={() => setShowModal(false)}
            isLoading={isLoadingDetail}
            details={details}
          />
        )}
        {showAlert && <AlertModal toggleModal={() => setShowAlert(false)} />}
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
              height={650}
              hasMore={true}
              loader={
                isLoadingScroll ? (
                  <h4 className="text-center animate-pulse text-gray-900 mb-10">
                    Loading...
                  </h4>
                ) : null
              }
            >
              <Table
                data={planetLists}
                viewDetail={onViewDetails}
                submitEdit={onSubmitEdit}
              />
            </InfiniteScroll>
          )}
          <div className="mt-5 pb-5">
            <input
              title="Search Bar"
              aria-label="search bar"
              role="search"
              className="pr-8 pl-4 py-2 rounded-md cursor-pointer border-black w-64 placeholder-gray-500 ml-5"
              type="text"
              placeholder="Type your planet..."
              value={name}
              onChange={(v) => setName(v.target.value)}
            />
            <button
              className="bg-gray-900 pr-4 pl-4 py-2 rounded-md cursor-pointer border-black w-30 ml-5 text-white"
              onClick={() => addPlanets(name)}
            >
              Add
            </button>
          </div>
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
  addPlanets,
  editPlanets,
};
export default connect(stateProps, dispatchProps)(Home);
