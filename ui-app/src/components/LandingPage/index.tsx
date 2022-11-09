import React from 'react'
import MyProvider from '../../context/MyProvider.tsx'
import ChildPage from '../ChildPage/index.tsx'

const LandingPage = () => {
  return (
    <MyProvider>
     <ChildPage />
    </MyProvider>
  )
}

export default LandingPage