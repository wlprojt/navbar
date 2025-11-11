
import Aboutone from '@/components/Aboutone'
import React from 'react'
import Abouttwo from '@/components/Abouttwo'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "wish-light | About",
  description: "Website, Android, and iOS app developer portfolio",
};

const page = () => {
  return (
    <div>
        <Aboutone />
        <Abouttwo />
    </div>
  )
}

export default page