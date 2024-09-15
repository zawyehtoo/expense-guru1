"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Loading from '@/lotties/loading.json'

const Landing = () => {
  return (
    <div className='h-dvh w-full flex flex-col justify-center items-center text-white font-bold text-3xl'>
        <Lottie animationData={Loading}/>
        <div className='relative top-[-10px]'>Expense Guru</div>
    </div>
  )
}

export default Landing