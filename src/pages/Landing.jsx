import React from 'react';
import { CTA, Footer, Hero, Navbar } from '../components';
import styles from '../style';


const Landing = () => {
    return (
        <div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Landing