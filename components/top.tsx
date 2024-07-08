"use client"
import React from 'react'


const Top = () => {
  return (
    <section className=' w-full md:h-16' 
    style={{
        width: '100%',
        backgroundImage: "url('./images/bg-top.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <main className=' mx-auto max-w-7xl p-6'>
            {/* main div */}
            <div className='w-full flex flex-col md:flex-row  md:gap-6 gap-3 '>
                {/* first div */}
                <div className="text-white text-base hover:text-amber-400 font-bold font-['Roboto Slab'] leading-tight tracking-wide">
                ShafaQuranTech@gmail.com
                </div>
                {/* second div */}
                <div className=" text-white text-base hover:text-amber-400 font-bold font-['Roboto Slab'] leading-tight tracking-wide">+923124810000</div>
            
            </div>
        </main>
    </section>
  )
}

export default Top