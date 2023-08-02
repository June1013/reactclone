import React from "react";
import logo from './google_logo.svg'
import search from './icon_search.svg'
import mic from './googlemic_clr_24px.svg'
function Middle(){
    return(
        <div className="">
          <div className="flex justify-center mt-36">
            <img src={logo}  />
          </div>
          <div className="flex justify-center mt-10 ">
            <img className="absolute p-4 right-2/3  "src={search}/>
            <input className="border-2 p-4 rounded-full w-2/5 px-10" type="text" placeholder="Google 검색 또는 URL 입력"/>
            <span className="absolute p-4 left-2/3">
            <img className=" "src={mic}/>
            </span> 
          </div>
          <div className="flex justify-center">
            <button className="bg-slate-200 m-4 border-2 rounded-md p-2 hover:border-gray-400">Google 검색</button>
            <button className="bg-slate-200 m-4 border-2 rounded-md p-2 hover:border-gray-400">I'm feeling Lucky</button>
          </div>
        </div>


    );
}

export default Middle;