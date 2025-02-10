import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { close, logo, menu, mandamenu, instagram, youtube} from '../assets';
import { navLinks } from '../constants';


const Navbar = () => {
    const [toggle, settoggle] = useState(false);
    const location = useLocation()

    return (
        <div className='w-full flex py-6 justify-between items-center navbar'>
            <Link to='/'><img src={logo} alt='mandacodigo' className='w-[48px] h-[48px] cursor-pointer' /></Link>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {
                    navLinks.map((nav, idx) => (
                        <li key={nav.id} className={`font-goldman font-normal cursor-pointer text-[16px] ${idx == navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-mandaGrey`}>
                            <Link
                                to={nav.id}
                                className={`px-3 py-2 text-lg font-medium transition-colors ${location.pathname === nav.id
                                    ? "text-white"
                                    : "text-mandaGrey"
                                }`}
                            >{nav.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain cursor-pointer z-50'
                    onClick={() => settoggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} fixed inset-0 bg-white z-30 flex-col text-xl transition-opacity duration-500 z-20`}>
                    <h3 className='mt-9 pl-5 text-center font-goldman tracking-veryWidest'>MENU</h3>
                    <ul className='ml-8 list-none mt-20 z-30'>
                        {
                            navLinks.map((nav, idx) => (
                                <li key={nav.id} className={`font-goldman font-normal cursor-pointer text-[36px] p-3 text-black`}>
                                    <Link
                                        to={nav.id}
                                        className={`py-2 text-3xl font-medium  ${location.pathname === nav.id
                                            ? "text-mandaMint"
                                            : "text-black"
                                        }`

                                        }
                                        onClick={() => settoggle((prev) => !prev)}
                                    >{nav.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                        
                    <img src={mandamenu} className='absolute bottom-0 right-0 w-56' />
                    
                    <div className='flex absolute bottom-10 left-10 space-x-2'>
                        <img src={instagram} alt='instagram'/>
                        <img src={youtube} alt='youtube'/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar