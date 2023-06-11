import React from 'react'
import Edit from "../../assets/icons/edit.svg";

type PlaylistProps = {
    name : string,
    image : string,
    id : number
}


function PlaylistCard({name, image, id} : PlaylistProps) {
    console.log(name)
  return (
    <div className='min-w-[330px] min-h-[200px] max-w-[400px] border border-slate-200 shadow-lg rounded-lg flex-1 basis-1/3 aspect-[16/10] py-4 px-6 flex flex-col font-md '>
        <div className='text-slate-500'>{name}</div>
        <div style={{backgroundImage: `url(${image})`}} className={`basis-9/12 border my-3 bg-cover aspect-[16/10] rounded-md`} >

        </div>
            {/* <img className='bas is-6/12 object-contain ' src={image}/> */}

        <div>
            <Edit/>
        </div>
    </div>
  )
}

export default PlaylistCard