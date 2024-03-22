import React from 'react'

function Webinars() {
  return (
    <div className='flex w-full '>
      <div className='bg-white w-1/2 p-14 flex flex-col gap-5'> 
        <h1 className='text-3xl font-semibold'>Looks like you don't have Zoom <br />
      Webinars</h1>
      <p>Zoom Webinars allows you to connect with large <br />
      audiences and share video, audio and content from any <br />
      location and device for better engagement.</p>

      <ul 
className='text-lg font-semibold p-5 '>
        <li className='flex gap-3'>✅<p>

Host up to 100,000 webinar attendees and 1,000 <br />
interactive video panelists live
        </p>
</li>
<li className='flex gap-3'>✅<p>    
HD webinar recordings or livestreaming to YouTube, <br />
Facebook, Twitch, or another custom platform
</p>
</li>
<li className='flex gap-3'>✅<p>
Measure engagement, analyze a session’s ROI, and <br />
gain insights into your target audiences
</p>
</li>
      </ul>
      <div className='flex gap-3' >
        <button className='bg-blue-500 text-white px-3 py-2 rounded'>Upgrade Now</button>
        <button className='border-2 border-solid px-3 py-2 border-black rounded'>Learn More</button>
      </div>
      </div>
      <div className='w-1/2'>
       
        <iframe width="700" height="400" src="https://www.youtube.com/embed/nwRyZ8MVnM8?si=KdNlqYvuJlCRMHDl"
         title="YouTube video player"
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

      </div>
    </div>
  )
}

export default Webinars
