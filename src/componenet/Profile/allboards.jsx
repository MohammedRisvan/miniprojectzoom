import React from 'react'
import template1 from "../images/templat-1.png"
import template2 from "../images/templat-2.jpg"
import template3 from "../images/templat-3.jpg"
import template4 from "../images/templat-4.jpg"
import template5 from "../images/templat-5.jpg"
import template6 from "../images/templat-6.jpg"
import template7 from "../images/templat-7.jpg"
import template8 from "../images/templat-8.jpg"
import template9 from "../images/templat-9.jpg"
import template10 from "../images/templat-10.jpg"
import template11 from "../images/templat-11.jpg"
import template12 from "../images/templat-12.jpg"
function AllBoards() {
  return (
    <div>
      <div>
        <h1>Templates</h1>
        <h2>All templates</h2>
      </div>
      <ul className='flex overflow-hidden'>
        <li><img src={template1} /><label ></label></li>
        <li><img src={template2} /></li>
        <li><img src={template3} /></li>
        <li><img src={template4} /></li>
        <li><img src={template5} /></li>
        <li><img src={template6} /></li>
        <li><img src={template7} /></li>
        <li><img src={template8} /></li>
        <li><img src={template9} /></li>
        <li><img src={template10} /></li>
        <li><img src={template11} /></li>
        <li><img src={template12} /></li>
      </ul>

    </div>
  )
}

export default AllBoards
