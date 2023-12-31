import '../styles/navbar.css'
import { ReactComponent as MailIcon } from '../assets/icons/envelope-regular.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/TwitterX.svg';
import { ReactComponent as RocketIcon } from '../assets/icons/rocket.svg';
import { ReactComponent as OpenIcon } from '../assets/icons/bars-solid.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/xmark-solid.svg';

import { useState } from 'react';

export function MainNavbar() {
    const [dropdown, setDropdown] = useState(false)
    const viewportWidth = window.innerWidth;
    const handleClickNavbar = ()=>{
        if(viewportWidth<=768){
            const dropdownId = document.getElementById('main-navbar')
            dropdownId.style.display = dropdown ? 'none' : 'flex'
            setDropdown(!dropdown)
        }
    }
  return (
    <>
        <button onClick={handleClickNavbar} id='device-icon'>
            {dropdown?<CloseIcon/>:<OpenIcon/>}
        </button>
        <nav id='main-navbar'>
            <ul id='navbar-menu'>
                <li>
                    <a className="nav-link" href='#home'>
                        <button className='sidenavbar-btn'>
                            <RocketIcon className='rocket'/> home
                        </button>
                    </a>
                </li>
                <li>
                    <a className="nav-link" href='#aboutme'>
                        <button className='sidenavbar-btn'>
                            <RocketIcon className='rocket'/> about me
                        </button>
                    </a>
                </li>
                <li>
                    <a className="nav-link" href='#experience'>
                        <button className='sidenavbar-btn'>
                            <RocketIcon className='rocket'/> experience
                        </button>
                    </a>
                </li>
                <li>
                    <a className="nav-link" href='#creations'>
                        <button className='sidenavbar-btn'>
                            <RocketIcon className='rocket'/> creations
                        </button>
                    </a>
                </li>
            </ul>
            <div className='navbar-logos'>
                <a href="mailto:arturo140493@gmail.com"><MailIcon className='social-media'/></a>
                <a href="https://github.com/Arturo9314" target='new_blank'><GithubIcon className='social-media'/></a>
                <a href="https://www.linkedin.com/in/arturo-torres-79499b177/" target='new_blank'><LinkedinIcon className='social-media'/></a>
                <a href="https://twitter.com/erredos19" target='new_blank'><TwitterIcon className='social-media'/></a>
            </div>
        </nav>
    </>
  )
}
