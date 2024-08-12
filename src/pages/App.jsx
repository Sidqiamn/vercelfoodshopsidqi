
import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Heder'
import HeaderMenu from '../components/HeaderMenu'
import './App.css'
import MainMenu from '../components/MainMenu'
import DownloadMobile from '../components/DownloadMobile'
import Footer from '../components/Footer2'

const App = () => {
  return (
    <div>

      <div className='mx-32 mt-10 xsm:mx-4'>

        <Navbar></Navbar>
        <Header></Header>
        <HeaderMenu></HeaderMenu>
        <MainMenu></MainMenu>
        <DownloadMobile></DownloadMobile>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  )
}

export default App