

import { Home } from 'lucide-react'
import type { Metadata } from "next";

import React from 'react'
import Homeone from '@/components/Homeone'
import Hometwo from '@/components/Hometwo'
import Homethree from '@/components/Homethree'


export const metadata: Metadata = {
  title: "wish-light | Home",
  description: "Website, Android, and iOS app developer portfolio",
};

const page = () => {
  return (
    <div >
      <Homeone />
      <Hometwo />
      <Homethree />
    </div>
  )
}

export default page