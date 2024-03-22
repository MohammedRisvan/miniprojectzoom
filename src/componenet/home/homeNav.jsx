import React, { useEffect, useState } from 'react';
import "./First.css";
import {  useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// import Zoom from "../images/zoom-pucts.png";

function IndexNavbar() {
  const navigate=useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    // Retrieve the JWT token from the cookie
    const jwtToken = Cookies.get('usertoken');

    // Use the JWT token as needed
    console.log('JWT Token:', jwtToken);
  }, []);

  

  return (
    <>
      <div className='bg-black dark:bg-gray-900   h-10 w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600 flex justify-end items-center '>
      <ul className='text-white flex justify-between w-1/2 '>
        <li >search</li>
        <li>Support</li>
        <li>0008000503335</li>
        <li>Request a Demo</li>
        <li>Join</li>
        <v style={{width:'2px',background:"white"}} />
        <li><select className='bg-transparent  border-transparent '>
          <option>Host</option>
          <option>With Video Off</option>
          <option>With Video On</option>
          <option>Screen Shair Only</option>
          </select></li>
        <li onClick={()=>navigate("/login")}>Sign In</li>
      </ul>
      </div>
    <nav className="bg-white dark:bg-gray-900  w-full  top-10 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-9 rtl:space-x-reverse">
          <img src="https://st2.zoom.us/static/6.3.19515/image/new/topNav/Zoom_logo.svg" className="h-8" alt="Flowbite Logo"/>
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-sky-600 dark:text-white">zoom</span> */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Products</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              
    <div>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className="block text-blue  hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800"
        type="button"
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        >
        Solutions
      </button>

      {/* Main modal */}
      {modalVisible && (
        
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className=" top-0 right-0 left-0  overflow-y-auto overflow-x-hidden flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >  <div className="grid grid-col-2">
        <div className="mainSection">
          <span className="columnTitle font-happy" id="productsC1Title">Zoom One</span>
          <p className="productsDescription showContent" id="productsC1Desc">Everything you need to work together, all in one place.</p>
          <p aria-labelledby="productsC1Title productsC1Desc">
            <a href="https://explore.zoom.us/en/collaboration-tools/" id="exploreZoomOne">Explore Zoom One’s Collaboration Tools</a>
          </p>
        </div>
        <ul className="productSectionLinks">
          <li className="productSubSection">
            <img className="topnav-product-icon virtual-meetings" src="https://st3.zoom.us/static/6.3.19658/image/new/topNav/nav-sprites.svg" alt="Virtual Meetings" />
            <div>
              <a href="https://explore.zoom.us/en/products/meetings/" data-on-event="send,event,product,click-nav-solutions-meetings,Header Nav Solutions Meetings and Chat">
                Virtual Meetings
              </a>
              <p className="productsLinkDesc">Connect virtually from anywhere with Zoom Meetings</p>
            </div>
          </li>
          {/* Add other list items similarly */}
        </ul>
      </div>
          <div className=" p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  data-modal-hide="default-modal"
                >
                  I accept
                </button>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  data-modal-hide="default-modal"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
          </li>
          <li>
            <a href="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Plans&Pricing</a>
          </li>
        </ul>
        </div>
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
          <button type="button" onClick={()=>navigate('/conatctsales')}className="text-sky-700 border border-b-7 border-indigo-500 bg-white hover:bg-blue-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Sales</button>
          <button type="button" onClick={()=>navigate('/signup')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up Free</button>
          <button  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            {/* <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg> */}
        </button>
      </div>
           </div>
      {/* product */}
      {/* </div> */}
    </nav>
    
    </>  )
}

export default IndexNavbar
