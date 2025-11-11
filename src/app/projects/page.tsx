

import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "wish-light | Project",
  description: "Website, Android, and iOS app developer portfolio",
};

const page = () => {
  return (
    <div className='flex h-screen font-xl text-bold w-full mt-100 item-center justify-center'>Show Project</div>
  )
}

export default page