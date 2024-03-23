import React, { useEffect, useState } from "react";
import profilepicture from "../images/profileimg.png";
// import axios from 'axios';
import Axios from "axios";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(profilepicture);
  const [imagedata, setImageData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone,setPhone]=useState("");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setPhone("")
  };
  const savenumber = async(e)=>{
    e.preventDefault();
    await  Axios.put("http://localhost:3003/api/profileupdate",{userId:userData._id,phone:phone},{withCredentials:true}).then((res)=>{
      console.log(res.data);
    })
    .catch(err=>console.log(err),
    alert(error));
    toggleModal();
  }
  console.log(phone);

  //   if(userData.profileImage){
  //     setImage(userData.profileImage)
  //   }
  // const userimage=userData.profileImage || "hellow"
  // console.log();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token = localStorage.getItem('token');

        const res = await Axios.get("http://localhost:3003/api/userprofile", {
          withCredentials: true,
        });

        setUserData(res.data.userdetail);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); // Set error state to display to the user
      }
    };

    fetchData(); // Call the async function inside useEffect

    // Return a cleanup function if needed
    return () => {
      // Cleanup code here, if necessary
    };
  }, []);
  console.log(imagedata);
  console.log("myerror" + error);
  // const {email,username,picture}=userData
  const handleImageChange = (e) => {
    setImageData(e.target.files[0]);
  };

  return (
    <div className="bg-white w-5/6 p-14 bg-slate-500">
      <div className=" h-full p-5 bg-white flex flex-col gap-10 items-center gap-10  ">
        <div className="flex items-center   p-5 gap-3 bg-slate-300  rounded-xl">
          <h1>ab</h1>
          <p>
            When you join meetings, webinars, chats or channels hosted on Zoom,
            your profile information, including your name and profile picture,
            may be visible to other participants or members. Your name and email
            address will also be visible to the account owner and host when you
            join meetings, webinars, chats or channels on their account while
            you’re signed in. The account owner and others in the meeting,
            webinar, chat or channel can share this information with apps and
            others.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
             <div className="w-[200px] h-[200px] cursor-pointer">

      {/* <img src={imageData ? URL.createObjectURL(imageData) : ''} alt="" /> */}
      <label style={{backgroundImage:`url(${image})`}}>
      <input
        type="file"
        className="hidden"
        onChange={handleImageChange}
      />
      </label>
    </div>

            <h1 className="text-2xl text-black">
              {userData ? userData.username : "loading..."}
            </h1>
            <a href="#">Edit</a>
          </div>
          <table className="h-80 ">
            <tr className="w-full font-bold  bg-slate-300">
              <th>Perosanal</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>phone</td>
              <td>not Found</td>
              <td className=" text-blue-700" onClick={toggleModal}>
                Add Phone Number
              </td>
              {isModalOpen && (
        <div
          id="static-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          data-modal-backdrop="static"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Enter your  Phone Number
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal"
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
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4 flex flex-col">
                <h1>Phone</h1>
                <input type="text" className="border border-slate-700" value={phone} onChange={(e)=>setPhone(e.target.value)}/> 
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={savenumber}
                  data-modal-hide="static-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
                <button
                  onClick={toggleModal}
                  data-modal-hide="static-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
            </tr>
            <tr>
              <td>Language</td>
              <td>English</td>
              <td>
                <a href="#">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Time Zone</td>
              <td>(GMT+5:30) India</td>
              <td>
                <a href="#">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Date Format</td>
              <td>
                {" "}
                mm/dd/yy <span>Example :03/01/2024</span>
              </td>
              <td>
                <a href="#">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Time Format</td>
              <td>Use 12-hours time(Example:02:00 PM)</td>
              <td>
                <a href="#">Edit</a>
              </td>
            </tr>
          </table>
          <table className="h-80 ">
            <tr className="w-full font-bold  bg-slate-300">
              <th>Meeting</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Personal Meeting ID</td>
              <td>
                430 576 3578 <br />
                <br />
                https://us04web.zoom.us/j/5960902709?
                <br />
                pwd=WGVLeTdGY0N0K0xNYzmXRlBIamkyUT09
                <br />
                <span>+ Use this ID for instand Meatings</span>
              </td>
              <td>
                <a href="#">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Host key</td>
              <td>....</td>
              <td>Edit</td>
            </tr>
          </table>
          <table className="h-64 ">
            <tr className="w-full font-bold  bg-slate-300">
              <th>Account</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>License</td>
              <td>
                Basic ? <a href="#">Upgrade to get more features</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="text-black">Meeting</td>
              <td>
                100 prticipants <a href="#">Increase Meating Capacity</a>
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="text-black">Zoom Clips Basic</td>
              <td>3 editable boards with standard features</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-black">Zoom whiteboard</td>
              <td>Enabled</td>
            </tr>
          </table>
          <table className="h-80 ">
            <tr className=" text-black bg-slate-300 rounded">
              <th>SignIn</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Sign-In Email</td>
              <td>{userData ? userData.email : "loading..."}</td>
              <td>
                <a href="#">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Linked Accounts</td>
              <td>Google</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a href="#">Sign Me Out From All Devices</a>
              </td>
              <td></td>
            </tr>
          </table>
          <table className="h-64">
            <tr className="bg-slate-300 font-bold ">
              <th>Others</th>
              <th></th>
            </tr>
            <tr>
              <td>Calendar and Contacts Integration</td>
              <td>
                We support the following services: Google Calendar, Microsoft
                Exchange, and Microsoft Office 365
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                If you want to add your contacts by importing a CSV file, go to{""}
                <a href="#">Personal Contacts</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button>Configure Calendar and Contacts Service</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
