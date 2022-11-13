import React, { useState, useContext } from "react";

import { GoThreeBars } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import "./header.css";
import { Outlet } from "react-router-dom";
import { CartContext } from "../contexts/cartContext/CartContext";
import CartButton from "./cartButton/CartButton";
import Sidebar from "./sidebar/Sidebar";
function Header({ setHidesidebar }) {
  // const cartInfo = useContext(CartContext);
  let [btnStatus, setButtonStatus] = useState(true);
  const bullshit = useContext(CartContext);
  const setValue = (value) => {
    setHidesidebar(value);
    console.log(value);
  };

  return (
    <>
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64"
      >
        <nav
          id="page-sidebar"
          className="flex flex-col fixed top-0 left-0 bottom-0 w-full lg:w-64 h-full bg-white border-r border-gray-200 z-50 transform transition-transform duration-500 ease-out -translate-x-full lg:translate-x-0"
          aria-label="Main Sidebar Navigation"
        >
          <div className="h-16 flex-none flex items-center justify-between lg:justify-center px-4 w-full">
            <a
              href="javascript:void(0)"
              className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-600 hover:text-gray-500"
            >
              <svg
                className="hi-solid hi-cube-transparent inline-block w-5 h-5 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Company</span>
            </a>

            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-red-600 hover:text-red-400 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:text-red-600"
              >
                <svg
                  className="hi-solid hi-x inline-block w-4 h-4 -mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-y-auto">
            <div className="p-4 w-full">
              <nav className="space-y-1">
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-700 bg-gray-100"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-home inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Dashboard</span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">
                    3
                  </span>
                </a>
                <div className="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Projects
                </div>
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-view-grid inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Manage</span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">
                    99+
                  </span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-clipboard-list inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Tasks</span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">
                    9
                  </span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-users inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Clients</span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-600 bg-gray-500">
                    26
                  </span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-plus-circle inline-block w-5 h-5 text-emerald-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Add New</span>
                </a>
                <div className="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Account
                </div>
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-user inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Profile</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-cog inline-block w-5 h-5"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Settings</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center space-x-3 px-3 font-medium rounded text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-50"
                >
                  <span className="flex-none flex items-center opacity-50">
                    <svg
                      className="hi-outline hi-lock-open inline-block w-5 h-5 text-red-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="py-2 grow">Log out</span>
                </a>
              </nav>
            </div>
          </div>
        </nav>

       

        <main
          id="page-content"
          className="flex flex-auto flex-col max-w-full pt-16"
        >
          <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full">
            <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64">
              Content (max width 1920px)
            </div>
          </div>
        </main>

        <footer
          id="page-footer"
          className="flex flex-none items-center bg-white"
        >
          <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm max-w-10xl mx-auto px-4 lg:px-8 w-full">
            <div className="pt-4 pb-1 md:pb-4">
              <a
                href="https://tailkit.com"
                target="_blank"
                className="font-medium text-indigo-600 hover:text-indigo-400"
              >
                Tailkit
              </a>{" "}
              ©
            </div>
            <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
              <span>Crafted with</span>
              <svg
                className="hi-solid hi-heart inline-block w-4 h-4 mx-1 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>
                by{" "}
                <a
                  href="https://pixelcave.com"
                  target="_blank"
                  className="font-medium text-indigo-600 hover:text-indigo-400"
                >
                  pixelcave
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Header;
