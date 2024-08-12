import React from 'react'
import facebook from '../../src/assets/facebook_icon.png'
import linkedin from '../../src/assets/twitter_icon.png'
import twitter from '../../src/assets/linkedin_icon.png'
import gmail from '../../src/assets/gmail_icon.png'

const Footer = () => {
  return (
    <div className='bg-gradient-to-br from-slate-700 via-orange-900 to-black relative mt-20 bottom-0 flex xsm:flex-col left-0'>
        <div className='w-1/2 xsm:w-full px-20 py-20 xsm:px-10 xsm:py-10'>
            <p className='text-orange-600 text-3xl overflow-hidden font-bold'>Sidqi.com</p>
            <p className='text-white mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere nam eius optio at neque adipisci, omnis beatae asperiores voluptate consectetur quos, sit iste libero id voluptatibus aliquid? Blanditiis, nobis?</p>
            <div className='flex gap-4'>
                <img src={facebook} className='h-10' alt="" /><img className='h-10' src={twitter} alt="" /><img className='h-10' src={linkedin} alt="" />
            </div>
        </div>
        <div className='w-1/2 xsm:w-full justify-evenly py-10 flex'>
            <div className='flex flex-col gap-3 '>
              <p className='text-xl font-bold text-white'>Company</p>
              <p className='text-white text-sm'>Home</p>
              <p className='text-white text-sm'>About us</p>
              <p className='text-white text-sm'>Delivery</p>
              <p className='text-white text-sm'>Privacy Policy</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className="text-xl font-bold text-white">Get In Touch</h1>
              <p className="text-white text-sm">+62 82319830019</p>
              <p className="text-white text-sm xsm:hidden">sidqiamanullah.sa@gmail.com</p>
            </div>
        </div>
        {
          window.innerWidth <=760 &&
          <div className='mb-20 mx-auto text-white flex items-center'>
            <img src={gmail} className='h-7' alt="" />
            <p className="text-white text-sm">sidqiamanullah.sa@gmail.com</p>
          </div>
        }
        
    </div>
  )
}

export default Footer