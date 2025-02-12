import React from 'react'
import styles from '../style'
import { logoBlack } from '../assets'

const Footer = () => {
  return (
    <div className={`justify-left items-start bg-mandaGrey ${styles.paddingX} w-bg-cover bg-center flex-col items-center px-7`}>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-left ml-5 p-2'>
          <img src={logoBlack} alt='logoBlack'/>
          <span className='font-goldman text-2xl p-5'>manda codigo</span>
        </div>
        <p className='font-goldman text-[8px] text-center p-2'>made by entei.design</p>
      </div>
    </div>
  )
}

export default Footer