import Information from "@/components/Information";
import SignUp from "@/components/SignUp";
import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className='min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 gap-4 '>
    <div className='flex flex-col items-start justify-start p-10 gap-4'>
      <div className='flex items-center justify-star '>
        <Image
          src='/images/hero-image.png'
          alt='Pilot Bogactwa'
          width={90}
          height={60}
        />
        <h1 className='text-2xl text-primary font-bold  '>Pilot Bogactwa</h1>
      </div>
      <SignUp />
     
    </div>
    <Information />
  </div>
  )
}
export default Register