import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
            className="mr-3 h-12 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="flex md:order-2">
          <Link to={"/checkout"}>
            <button
              type="button"
              className=" relative   lg:px-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none p-2  focus:ring-blue-300 font-medium rounded-lg text-sm  text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <AiOutlineShoppingCart className="text-[20px]" />
              <span className="absolute lg:w-[19px] mx-1 lg:h-[22px] top-0 bottom-[12px] left-[20px] lg:left-[32px] rounded-full bg-white-500 text-white p-1 text-xs">
                {items.length}
              </span>
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/shop"}
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Shop
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div>
    //   <>
    //     {/* component */}
    //     <nav className="bg-white shadow">
    //       <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    //         <div className="flex justify-between items-center">
    //           <div>
    //             <Link
    //               className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
    //               to={"/"}
    //             >
    //               Brand
    //             </Link>
    //           </div>
    //           {/* Mobile menu button */}
    //           <div className="flex md:hidden">
    //             <button
    //               type="button"
    //               className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
    //               aria-label="toggle menu"
    //               onClick={() => setNavOpen(true)}
    //             >
    //               <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //         {/* Mobile Menu open: "block", Menu closed: "hidden" */}
    //         <div className="md:flex items-center">
    //           <div className="flex flex-col md:flex-row md:mx-6">
    //             <Link
    //               className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //               to={"/"}
    //             >
    //               Home
    //             </Link>
    //             <Link
    //               className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //               to={"/shop"}
    //             >
    //               Shop
    //             </Link>
    //             <Link
    //               className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //               to={"/contact"}
    //             >
    //               Contact
    //             </Link>
    //             <a
    //               className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //               href="#"
    //             >
    //               About
    //             </a>
    //           </div>
    //           <div className="flex justify-center md:block">
    //             <Link
    //               className="relative text-gray-700 hover:text-gray-600"
    //               to={"/checkout"}
    //             >
    //               <svg
    //                 className="h-5 w-5"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
    //                   stroke="currentColor"
    //                   strokeWidth={2}
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //               </svg>
    //               <span className="absolute lg:w-[19px] lg:h-[22px] top-0 bottom-[10px] left-0 rounded-full bg-indigo-500 text-white p-1 text-xs">
    //                 {items.length}
    //               </span>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>

    //     {/* moblie navbar  */}
    //     {isNavOpen && (
    //       <div className="md:flex items-center">
    //         <div className="flex flex-col md:flex-row md:mx-6">
    //           <Link
    //             className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //             to={"/"}
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //             to={"/shop"}
    //           >
    //             Shop
    //           </Link>
    //           <Link
    //             className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //             to={"/contact"}
    //           >
    //             Contact
    //           </Link>
    //           <a
    //             className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    //             href="#"
    //           >
    //             About
    //           </a>
    //         </div>
    //         <div className="flex justify-center md:block">
    //           <Link
    //             className="relative text-gray-700 hover:text-gray-600"
    //             to={"/checkout"}
    //           >
    //             <svg
    //               className="h-5 w-5"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //               />
    //             </svg>
    //             <span className="absolute lg:w-[19px] lg:h-[22px] top-0 bottom-[10px] left-0 rounded-full bg-indigo-500 text-white p-1 text-xs">
    //               {items.length}
    //             </span>
    //           </Link>
    //         </div>
    //       </div>
    //     )}
    //   </>
    // </div>
  );
};

export default Navbar;
