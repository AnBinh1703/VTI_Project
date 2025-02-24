import React from 'react'
import { TopNavigation } from './TopNavigation'
import { Heading } from './Heading'
import { Navbar } from './Navbar'
export const Header = () => {
  return (
    <div className='header-container'>
        <TopNavigation/>
        <Heading/>
        <Navbar/>
    </div>
  )
}



