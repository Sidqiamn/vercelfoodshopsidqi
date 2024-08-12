import React from 'react'
import appStore from '../../src/assets/app_store.png'
import playStore from '../../src/assets/play_store.png'

const DownloadMobile = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-10 mt-14'>
        <h1 className='font-semibold text-3xl xsm:text-center'>For Better Exprience Download Tomato App</h1>
        <div className='flex gap-5 justify-center items-center'>
            
            <img src={appStore} alt="" />
            <img src={playStore} alt="" />
        </div>
    </div>
  )
}

export default DownloadMobile

