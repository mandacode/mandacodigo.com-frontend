import React from 'react';
import { Hero } from '../components';


const Landing = () => {
    return (
        <div>
            <div className="h-screen bg-backgroundHero bg-no-repeat bg-center bg-scroll">
                <Hero />
              
            </div>
            <div>
                Why manda
            </div>



            {/* <div className={`bg-primary ${styles.flexStart} `}>
               
            </div>
            <div className={`bg-primary ${styles.flexStart} `}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div> */}
        </div>
    )
}

export default Landing