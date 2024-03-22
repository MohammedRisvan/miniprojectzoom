import React, { useState } from 'react';
import zoom from "../images/zoom-pucts.png";
// import Carousel from './carousel';
import zoomone from "../images/img1.jpg";
import space from "../images/img2.jpg";
const slides = [
  <div className='w-[75rem] h-screen bg-white gap-10 pr-10 flex items-center gap-1 justify-center  '>
    <img className=' h-1/2  ' src={zoomone} alt="hfdgd" />
    <div className='flex flex-col w-2/4  gap-5  text-2xl border border-blue-500'>
      <pre><h1 className='font-bold text-xl'>Unified communication and<br/> collaboration platform</h1></pre>
      <p>Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.</p>
      <ul className="grid  grid-cols-2 gap-5 grid-rows-4 justify-self-auto w-full text-base">
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/TWAE5vIoSyqnbwQ9r_H3zg/MS4yLoT3qtycfaKkPD_rMUSRdEwmZpFWI4d5R-gmGf12svDk/cc8733ef-6b23-4d15-acbb-dbc6217901d1.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/products/meetings/" target="_blank">Virtual Meetings</a>
          </pre>
        </li>
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/W0L51lMrQtWShqOeU10A2w/MS4yLkbW6YpwLWY7OEieFZe6irJUk7UZocX___gXO2FjPQiS/48f8ddec-ee22-4b98-9671-6256a830e110.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/products/group-chat/" target="_blank">Team Chat</a>
          </pre>
        </li>
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/AY4XcMOGQmKCHp_Ihbx5UA/MS4yLvR4wOTWK4saf6-gSr3uAlUEkUkiMguA8axuYcPQMGph/74d37332-ab28-48d9-aa8b-8018819736a9.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/products/zoom-phone/" target="_blank">VoIP Phone System</a>
          </pre>
        </li>
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/d3dF9rgFTLS9E2TmZvCw1w/MS4yLuTLqT2yvfZZoo_hIn2MBli66KifOKbdCSsvmgxx84kL/e7989e66-118d-4304-9efe-963a9b8a99fb.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/products/online-whiteboard/" target="_blank">Online Whiteboard</a>
          </pre>
        </li>
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/YfjgdtTQSeWQZcj3Z8IkIQ/MS4yLlC_Kon4CpxR8jocxHAxj59zO-9MYgS0I-KCUl44M2s9/7d7e8546-5096-45c3-85d8-1bae62cb161f.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/ai-assistant/" target="_blank">AI Companion</a>
          </pre>
        </li>
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/UZ0QN8-oQeutU3JTeEBhbg/MS4yLqB0XMdz6LyfwVXim2EivrpAur-85Kj9QWjARaVXMxDQ/daf9033e-71b6-4e31-bbd2-0568f6a0dad4.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/products/email-calendar/" target="_blank">Email and Calendar </a>
          </pre>
        </li>
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/9xN0-ByKRoGGM9sw2hWE9Q/MS4yLqXRbO-x95zSmr9JbTZ7DfxKHbEH9SCUK_g_hU9kDhv8/24bdcaf6-934b-40a4-a8ee-2cf34ece062c.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/products/virtual-coworking-spaces/" target="_blank">Virtual Working Spaces</a>
          </pre>
        </li>
        <li className="flex items-center gap-2">
          <img src="https://file-paa.zoom.us/4kjGeRMuRm6zGQgCusEmJg/MS4yLji-5jAfh61p2nCYcuFQwpvxMAKpA1lUotTEJY_ivR_7/dc3bbfac-bcb2-4e3e-baba-577dc13fa5c7.svg" className="svgUrl" />
          <pre>
            <a href="https://explore.zoom.us/en/products/appointment-scheduler/" target="_blank">Appointment Scheduler</a>
          </pre>
        </li>
      </ul>
    </div>
  </div>,
      <div className="w-[75rem] h-screen swiper-slide product-slide swiper-slide-active" id="tabpanel-2" role="group" aria-labelledby="tab-2" aria-label="2 / 5" style={{ width: '1029px' }}>
      <div className="image-wrapper">
        <div className="img-container">
          <img src={space}/>
          <div className="bg-shadow"></div>
          <img src="https://st3.zoom.us/static/6.3.19658/image/home2/clips2.png" alt="Zoom Interface Icon - Workspace Reservation" className="clips" />
        </div>
      </div>
      <div className="letter-container">
        <h2 className="big-font font-happy">Workspaces reimagined</h2>
        <p className="desc">Innovative room solutions for every meeting space.</p>
        <ul className="feature-lists">
          <li>
            <img src="https://file-paa.zoom.us/27_DWrOIQg-ufW2qQ_6WyA/MS4yLhtVrNcF8RAj4JEmrwtZkGFyXYxUKAbbRHTmcjNfbYDK/51e0a437-f6da-4f72-b96f-e5160063dea2.svg" className="svgUrl" alt="Conference Room Systems" />
            <a href="https://explore.zoom.us/en/products/zoom-rooms/" target="_blank" rel="noopener noreferrer">Conference Room Systems</a>
          </li>
          <li>
            <img src="https://file-paa.zoom.us/MnRbQESETzSgnDDUx0YXIw/MS4yLnU7Bfy5fL7BSQQOlZEJ4NCfOLRdpNqsCFdRPhyT7nXx/85702cf9-3518-4a40-90d2-3c40f425dc89.svg" className="svgUrl" alt="Connected Conference Rooms" />
            <a href="https://explore.zoom.us/en/products/zoom-rooms/room-connector/" target="_blank" rel="noopener noreferrer">Connected Conference Rooms</a>
          </li>
          <li>
            <img src="https://file-paa.zoom.us/eF9jWxa_QheVu9xaLowl5g/MS4yLg9RAaWUzn9N_gjsZAi2CFvIRGOZzx3cz9GWKdOeWYXY/74c70cea-6e24-4c47-9ecb-f314ddfc612f.svg" className="svgUrl" alt="Workspaces" />
            <a href="https://explore.zoom.us/en/products/workspace/" target="_blank" rel="noopener noreferrer">Workspaces</a>
          </li>
        </ul>
      </div>
    </div>
  
  // "data:image/jpeg;base64,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",
  // "data:image/jpeg;base64,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",
  // "data:image/jpeg;base64,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"
]
function Homepage() {
  const [curr, setcurr] = useState(0);
  function Carousel({ children: slides }) {
    const prev = () => setcurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setcurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    return (
      <div className="w-full overflow-hidden  h-screen relative">
        {console.log(slides)}
        <div className="flex trnsition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
        {/* <div className=" flex items-center  justify-between p-4 text-black"><button onClick={prev} size={40}>
          A
        </button>
          <button onClick={next} size={40}>B</button></div> */}
          
      </div>
    )
  }

  return (
    <div>
      {/* firstpage */}
      <div className='w-full h-screen bg-slate-300'>
        <div className=' h-screen w-2/4 bg-white flex items-center justify-center gap-10 flex-col'>
          <a className="bg-sky-200 rounded-3xl flex px-10 py-2 w-50
         items-center gap-5
        text-lg border border-blue-900">
            <span className="text items-center flex">
              <span className="icon-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <circle cx="10" cy="10" r="10" fill="#90E0E0"></circle> <g clip-path="url(#clip0_1345_66711)"> <path d="M13.5 7.66675C13.5 6.73849 13.1313 5.84825 12.4749 5.19187C11.8185 4.5355 10.9283 4.16675 10 4.16675C9.07174 4.16675 8.1815 4.5355 7.52513 5.19187C6.86875 5.84825 6.5 6.73849 6.5 7.66675C6.5 11.7501 4.75 12.9167 4.75 12.9167H15.25C15.25 12.9167 13.5 11.7501 13.5 7.66675Z" stroke="#00031F" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.0091 15.2501C10.9065 15.4269 10.7593 15.5737 10.5822 15.6757C10.4051 15.7777 10.2043 15.8314 9.99989 15.8314C9.7955 15.8314 9.5947 15.7777 9.41759 15.6757C9.24048 15.5737 9.09328 15.4269 8.99072 15.2501" stroke="#00031F" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_1345_66711"> <rect width="14" height="14" fill="white" transform="translate(2.99976 3.00009)"></rect> </clipPath> </defs> </svg>
              </span>
              Discover new ways to unlock AI within your workflows</span>
            <span className="text-blue-900">Watch On-demand<i className="zm-icon-right"></i></span>
          </a>
          <div>
            <div className='w-1/4 h-px bg-black '></div>
            <h1 className=' text-8xl '>
              AI that makes <br />You more <br /><span className='text-sky-700'>Productive</span></h1></div>
          <p className='text-xl font-semibold'>Zoom AI Companion is your trusted digital assistant <br />that empowers you <b>Included at no additional cost with<br /> your paid Zoom user account.</b></p>
          <button className='flex gap-5 items-center font-semibold'>
            <button className='bg-blue-800 text-white px-5 py-2 rounded-2xl'>Plans  & Pricing</button>
            <button className='text-blue-900'>Discover Ai Companinon</button>
          </button>
        </div>
        <div className='bg-slate-100'></div>
      </div>
      {/* secondpage */}
      <div className='w-full h-screen  flex'>
        <div className='w-1/4 bg-blue-900 h-screen text-white '>
          <img src={zoom} className='p-10 bg-blue-600' />
          <h1 className=' ml-5 font-bold text-3xl w-full'>Flexible solutions for modern team collaboration</h1>
          <button className='ml-5 mt-10 h-80 flex flex-col gap-5 '>
            <button className='border rounded-full px-3 py-1 border-cyan-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ' onClick={() => setcurr(0)}>Zoom One</button>
            <button className='border rounded-full px-3 py-1 border-cyan-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ' onClick={() => setcurr(1)}>Spaces</button>
            <button className='border rounded-full px-3 py-1 border-cyan-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>Events</button>
            <button className='border rounded-full px-3 py-1 border-cyan-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>Contact Center</button>
            <button className='border rounded-full px-3 py-1 border-cyan-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>Developers</button>
          </button></div>

        <Carousel className="w-full h-screen">{slides.map((c) => {
          return (<div >
            {/* <img src={c} className='w-full h-screen'/>  */}
            {c}
          </div>
          )
        })}</Carousel>
        {/* <div className="overflow-hidden relative">
            <div className="flex trnsition-transform ease-out duration-500">{slides}</div>
            <div className="absolute inset-0 flex items-center  justify-between p-4"><button onClick={prev} size={40}>
                A
            </button>
            <button onClick={next }size={40}>B</button></div>
        </div> */}

        {/* <h1>hellow</h1> */}
      </div>


    </div>
  )
}

export default Homepage
