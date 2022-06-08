import {useState} from 'react'
import { sha256 } from 'js-sha256';


export default function Hash(){
  const [data,setData]=useState("")
  
  return(
    <div className="block space-y-5 p-6 mt-2 rounded-lg shadow-lg bg-white max-w-screen min-w-[80vw] xl:min-w-[65vw] full hover:shadow-xl mt-2">
      <div className=" flex space-x-5">
    <label htmlForfor="data" className="form-label inline-block mb-2 text-gray-700"
      >Data</label>
    <textarea
      id="data"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-[1.7px] border-solid border-gray-500
        rounded
        transition
        ease-in-out
        m-0
      foucus:ring-blue-300
        focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none "
      
      rows="12"
      placeholder="Data"
      onChange={e=>setData(e.target.value)}
    ></textarea>
    </div>
      <div className="flex space-x-5 items-center">
        <span className="">Hash</span>
        <p className="border rounded-lg p-2">{sha256(data)}</p>
      </div>
      </div>
    
  )
  
}