import React from 'react'

function MainClips() {
  return (
    <div>
      <div>
        <h1>Clips</h1>
        <p><a href="#">Feedback</a></p>
      </div>
      <ul className='flex'>
        <li>All Clips</li>
        <li>My Clips</li>
        <li>Shared with Me</li>
        <li>Starred</li>
        <li>Trash</li>
        <li>Notifications</li>
      </ul>
    </div>
  )
}

export default MainClips
