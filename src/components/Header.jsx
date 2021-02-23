import React from "react";

export default function Header(props) {
  const { onChange, keyword, isLoading } = props;
  return (
    <nav
      aria-label="top bar"
      className="flex-none flex justify-between bg-white h-16 shadow-lg fixed w-full pl-20"
    >
      <div
        aria-label="top bar left"
        aria-orientation="horizontal"
        className="flex items-center"
      >
        <p className="font-sans text-3xl ml-5 font-bold ...">
          Your Planet Lists
        </p>
      </div>

      <ul
        aria-label="top bar right"
        aria-orientation="horizontal"
        className="px-8 flex items-center"
      >
        <li className="relative mr-10">
          <input
            title="Search Bar"
            aria-label="search bar"
            role="search"
            className="pr-8 pl-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out 
            focus:border-black focus:cursor-text w-4 focus:w-64 placeholder-transparent focus:placeholder-gray-500"
            type="text"
            placeholder="Type your planet..."
            value={keyword}
            onChange={onChange}
          />
          <i className="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
            <svg
              className="fill-current w-4 h-4 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </i>
          {isLoading && (
            <span className="flex h-4 w-4 absolute -top-2 -right-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
            </span>
          )}
        </li>

      </ul>
    </nav>
  );
}
