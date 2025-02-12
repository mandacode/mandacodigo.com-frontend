import React from 'react'
import Button from '../components/Button'

const NotFound = () => {
    return (
        <div className={`h-screen bg-backgroundSite bg-no-repeat bg-center bg-scroll`}>
            <div className='px-5 flex flex-col items-center'>
                <h1 className='text-center items-center text-white pt-20 font-konexy text-[128px]'>404</h1>
                <p className='text-mandaLightGrey text-center text-[16px] font-avenir'>
                    Podczas przetwarzania wystąpił błąd.<br />
                    Prosze sprobuj ponownie pozniej.
                </p>
                <div className='py-20 w-full sm:w-80 justify-center '>
                    <Button text='Powrót' to='/' />
                </div>
            </div>

        </div>
    )
}

export default NotFound