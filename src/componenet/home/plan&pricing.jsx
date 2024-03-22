import React, { useState } from 'react'

function Business() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div className='bg-indigo-950 flex flex-col items-center gap-5  h-screen mt-28'>
        <h1 className='text-white font-bold flex items-center justify-center text-5xl py-10 gap-2 '>Plans&Pricing<span className='text-sky-300 '><select className='border border-transparent bg-indigo-950 border-transparent underline'>
            <option>Business</option>
            <option>perosonal</option>
            <option >Helthcare</option>
            <option>Developer</option>
            </select></span></h1>
            <div className='text-white flex items-center gap-10  font-semibold text-lg'>
            <button className= {` border-white py-2 px-5 border rounded-full border-whitehover:bg-white hover:text-blue-700 hover:bg-white focu:bg-sky-400`}><a href="/pricing" >Zoom One</a></button> 
            <button className='border-white py-2 px-5 border rounded-full border-whitehover:bg-white hover:text-blue-700 hover:bg-white focus:bg-sky-400'><a href='pricing/zoom-phone'>Zoom Phone</a></button>
            <button className='border-white py-2 px-5 border rounded-full border-whitehover:bg-white hover:text-blue-700 hover:bg-white focus:bg-sky-400'><a>Zoom Evnents& Webinar</a></button>
            <button className='border-white py-2 px-5 border rounded-full border-whitehover:bg-white hover:text-blue-700 hover:bg-white focus:bg-sky-400'><a>Zoom Rooms</a></button>
            <button className='border-white py-2 px-5 border rounded-full border-whitehover:bg-white hover:text-blue-700 hover:bg-white focus:bg-sky-400'><a>Zoom Contact Center</a></button>
            <button className='border-white py-2 px-5 border rounded-full border-whitehover:bg-white hover:text-blue-700 hover:bg-white focus:bg-sky-400'><a>Zoom Whiteboard</a></button>
            </div>
      <div className='w-full h-screen rounded-t-3xl'>
        <ZoomOne/>
      </div>
    </div>
  )
}

export default Business

function ZoomOne(){
    return(
        <div>  
          <div>          
<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] z-11 after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>
</div>
        </div>
    )

}