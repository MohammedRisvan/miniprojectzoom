import React, { useEffect, useState } from 'react';
import profilepicture from"../images/profileimg.png";
// import axios from 'axios';
import Axios  from 'axios';


function Profile() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [image,setImage]=useState(profilepicture);
  if(userData.profileImage){
    setImage(userData.profileImage)
  }
    useEffect(() => {
      const fetchData = async () => {
        try {
            // const token = localStorage.getItem('token');
            
          const res = await Axios.get("http://localhost:3003/api/userprofile",{withCredentials:true});
        
          setUserData(res.data.userdetail)
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
    }, [])
    console.log("myerror"+error);
    // const {email,username,picture}=userData
  return (
    <div className='bg-white w-5/6 p-14 bg-slate-500'>
        <div className=' h-full p-5 bg-white flex flex-col gap-10 items-center gap-10  '>
        <div className='flex items-center   p-5 gap-3 bg-slate-300  rounded-xl'>
            <h1>ab</h1>
            <p>When you join meetings, webinars, chats or channels hosted on Zoom, your profile information,
                 including your name and profile picture, may be visible to other
                  participants or members. Your name and email address will also be visible to the account owner
                   and host when you join meetings, webinars, chats or channels on their account while you’re signed
                    in. The account owner and others in the meeting, webinar, chat or channel can share this
                     information with apps and others.</p>
        </div>
        <div className='flex flex-col w-full'><div className='flex justify-between'>
            <img src={image} />
            <h1 className='text-2xl text-black'>{userData?userData.username:'loading...'}</h1>
            <a href="#">Edit</a>
            </div>        
        <table  className='h-80 '>
            <tr className='w-full font-bold  bg-slate-300'>
            <th>Perosanal</th>
            <th></th>
            <th></th>
            </tr>
            <tr>
                <td>phone</td>
                <td>not Found</td>
                <td><a href="#">Add Phone Number</a></td>
            </tr>
            <tr>
                <td>Language</td>
                <td>English</td>
                <td><a href="#">Edit</a></td>
            </tr>
            <tr>
                <td>Time Zone</td>
                <td>(GMT+5:30) India</td>
                <td><a href="#">Edit</a></td>
            </tr>
            <tr>
                <td>Date Format</td>
                <td> mm/dd/yy <span>Example :03/01/2024</span></td>
                <td><a href="#">Edit</a></td>
            </tr>
            <tr>
                <td>Time Format</td>
                <td>Use 12-hours time(Example:02:00 PM)</td>
                <td><a href="#">Edit</a></td>
                </tr>
        </table>
        <table  className='h-80 '>
            <tr className='w-full font-bold  bg-slate-300'>
                <th>Meeting</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td>Personal Meeting ID</td>
                <td>430 576 3578 <br /><br />
                https://us04web.zoom.us/j/5960902709?<br/>
                pwd=WGVLeTdGY0N0K0xNYzmXRlBIamkyUT09
                <br />
                <span>+ Use this ID for instand Meatings</span>
                </td>
                <td><a href="#">Edit</a></td>
            </tr>
            <tr>
                <td>Host key</td>
                <td>....</td>
                <td>Edit</td>
            </tr>
        </table>
        <table  className='h-64 '>
            <tr className='w-full font-bold  bg-slate-300'>
                <th>Account</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td>License</td>
                    <td>Basic ? <a href="#">Upgrade to get more features</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className='text-black'>Meeting</td>
                    <td>100 prticipants <a href="#">Increase Meating Capacity</a></td>
                </tr>
                    
                <tr>
                    <td></td>
                    <td className='text-black'>Zoom Clips Basic</td>
                    <td>3 editable boards with standard features</td>
            </tr>
            <tr>
                <td></td>
                    <td className='text-black'>Zoom whiteboard</td>
                    <td>Enabled</td>
            </tr>
                
        </table>
        <table  className='h-80 '>
            <tr className=' text-black bg-slate-300 rounded'>
                <th >SignIn</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td>Sign-In Email</td>
                <td>{userData?userData.email:"loading..."}</td>
                <td><a href="#">Edit</a></td>
            </tr>
            <tr>
                <td>Linked Accounts</td>
                <td>Google</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><a href="#">Sign Me Out From All Devices</a></td>
                <td></td>
            </tr>
        </table>
        <table className='h-64'>
            <tr className='bg-slate-300 font-bold '>
                <th>Others</th>
                <th></th>
            </tr>
            <tr>
                <td>Calendar and Contacts Integration</td>
                <td>We support the following services: Google Calendar, Microsoft Exchange, and Microsoft Office 365</td>
            </tr>
            <tr>
                <td></td>
                <td>If you want to add your contacts by importing a CSV file, go to <a href="#">Personal Contacts</a></td>
            </tr>
            <tr>
                <td></td>
                <td><button>Configure Calendar and Contacts Service</button></td>
            </tr>
        </table>
        </div>
        </div>
    </div>
  )
}

export default Profile
