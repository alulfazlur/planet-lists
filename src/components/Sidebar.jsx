import React from "react";

// assets
import earthIcon from "../assets/earth.png";
export default function Sidebar(props) {
  const {onClick} = props
  return (
    <>
      <nav className="bg-gray-900 w-20  justify-between flex flex-col h-full fixed">
        <div className="mt-5">
          <a href="#">
            <img
              src={earthIcon}
              className="rounded-full w-10 h-10 mb-16 mx-auto"
              alt="earth"
            />
          </a>
          <div className="mt-10">
            <ul>
              <li className="mb-12">
                <a href="#">
                  <span>
                    <svg
                      className="fill-none stroke-current h-5 w-5 mx-auto text-green-500 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="mb-12">
                <a href="#"  onClick={onClick}>
                  <span>
                    <svg
                      className="transition duration-300 fill-current h-5 w-5 mx-auto text-gray-300 hover:text-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                          014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                          8-4z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li className="mb-12">
                <a href="#" onClick={onClick}>
                  <span>
                    <svg
                      className="transition duration-300 fill-none stroke-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500"
                      viewBox="0 0 24 24"
                    >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                        />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={onClick}>
                  <span>
                    <svg
                      className="transition duration-300 fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.775 8C22.9242 8.65461 23 9.32542 23 10H14V1C14.6746 1 15.3454 1.07584 16 1.22504C16.4923 1.33724 16.9754 1.49094 17.4442 1.68508C18.5361 2.13738 19.5282 2.80031 20.364 3.63604C21.1997 4.47177 21.8626 5.46392 22.3149 6.55585C22.5091 7.02455 22.6628 7.5077 22.775 8ZM20.7082 8C20.6397 7.77018 20.5593 7.54361 20.4672 7.32122C20.1154 6.47194 19.5998 5.70026 18.9497 5.05025C18.2997 4.40024 17.5281 3.88463 16.6788 3.53284C16.4564 3.44073 16.2298 3.36031 16 3.2918V8H20.7082Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 14C1 9.02944 5.02944 5 10 5C10.6746 5 11.3454 5.07584 12 5.22504V12H18.775C18.9242 12.6546 19 13.3254 19 14C19 18.9706 14.9706 23 10 23C5.02944 23 1 18.9706 1 14ZM16.8035 14H10V7.19648C6.24252 7.19648 3.19648 10.2425 3.19648 14C3.19648 17.7575 6.24252 20.8035 10 20.8035C13.7575 20.8035 16.8035 17.7575 16.8035 14Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
