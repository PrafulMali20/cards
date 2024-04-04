import React, { useState } from 'react'
import Cards from './Cards'


function Forground() {
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag:{
                    isOpen: true,
                    tagTitle: "Download Now",
                    tagColor:"green"
                },
            
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag:{
                    isOpen: true,
                    tagTitle: "Upload Now",
                    tagColor:"blue"
                },
            
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag:{
                    isOpen: true,
                    tagTitle: "Download Now",
                    tagColor:"green"
                },
            
        },
    ];
    useState()
  return (
    <div>

        <div className='fixed top-0 left-0 z-[3] w-full h-full  p-100 flex gap-5 flex-wrap'></div>

        {data.map((item, index) => (
             <Cards data = {item} />
        ))}
    </div>

  )
}

export default Forground