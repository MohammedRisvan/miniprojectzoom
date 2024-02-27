// import { useState } from "react";
// export default function Carousel({children:slides}){
//     const [curr,setcurr]=useState(0)
//     const prev=()=>setcurr((curr)=>(curr==0? slides.length-1:curr-1))
//     const next=()=>setcurr((curr)=>(curr==slides.length-1?0:curr+1))
//     return(
//         <div className="overflow-hidden w-full h-screen relative">
//             {console.log(slides)}
//             <div className="flex trnsition-transform ease-out duration-500" style={{transform:`translateX(-${curr*100}%)`}}>{slides}</div>
//             <div className="absolute inset-0 flex items-center  justify-between p-4 text-white"><button onClick={prev} size={40}>
//                 A
//             </button>
//             <button onClick={next }size={40}>B</button></div>
//         </div>
//     )
// }