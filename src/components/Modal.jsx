import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Modal(props) {
  const { toggleModal, isLoading, details } = props;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {isLoading ? (
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <ClipLoader
                color={"black"}
                loading={isLoading}
                css={{ display: "block", margin: "0 auto", borderWidth: 3 }}
                size={100}
              />
            </div>
          ) : (
            <>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900 mb-3"
                      id="modal-headline"
                    >
                      {details.name}
                    </h3>
                    <hr />
                    <div className="mt-2 grid grid-cols-2 gap-4 w-full">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Climate</p>
                        <p className="text-sm text-gray-500 mb-2">Population</p>
                        <p className="text-sm text-gray-500 mb-2">Diameter</p>
                        <p className="text-sm text-gray-500 mb-2">Gravity</p>
                        <p className="text-sm text-gray-500 mb-2">Orbital Period</p>
                        <p className="text-sm text-gray-500 mb-2">
                          Rotation Period
                        </p>
                        <p className="text-sm text-gray-500 mb-2">Surface Water</p>
                        <p className="text-sm text-gray-500 mb-2">Terrain</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.climate}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.population}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.diameter}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.gravity}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.orbital_period}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.rotation_period}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.surface_water}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          : {details.terrain}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
