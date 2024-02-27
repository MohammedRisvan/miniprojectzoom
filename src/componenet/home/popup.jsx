import React from 'react'

const Popup = () => {
    // JavaScript
function openPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
//   function closePopup() {
//     document.getElementById('popup').style.display = 'none';
//   }
  openPopup()
  return (
    <div>
      {/* <!-- HTML --> */}
<div class="fixed z-10 inset-0 overflow-y-auto" style="display: none;" id="popup">
  <div class="flex items-center justify-center min-h-screen">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div class="relative bg-white p-8 rounded-lg shadow-xl">
      {/* <!-- Popup content --> */}
      <h1 class="text-2xl font-bold mb-4">Popup Title</h1>
      <p>This is a popup window content.</p>
      {/* <!-- Close button --> */}
      <button class="absolute top-0 right-0 m-4" onclick="closePopup()">
        <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
</div>

{/* <!-- Button to open popup --> */}
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onclick="openPopup()">
    {/* <div>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>detailes</li>
            <li>products</li>
        </ul>
    </div> */}
</button>

    </div>
  )
}

export default Popup
