import React from 'react';
import Button from './Button';



const Hero = () => {
  return (
    <div>
      <div className='flex flex-col items-center pt-5 px-8'>
        <h1 className='font-konexy text-white text-[34px] text-center leading-none py-5'>
          Zostan <br />
          <span className='text-mandaPurple'>Programista</span> <br />
          <span>Python i</span> <br />
          Pracuj <span className='text-mandaPurple'>Zdalnie</span>
        </h1>

        <p className='text-mandaLightGrey text-center text-[16px] font-avenir'>
          Kursy i mentoring od Manda pomogą Ci rozpocząć karierę w IT z dowolnego miejsca na świecie.
        </p>

        <div className='py-20 w-full sm:w-80 justify-center'>
          <Button text='Rozpocznij mentoring' to='contact' />
        </div>

      </div>
    </div>

  )
}

export default Hero