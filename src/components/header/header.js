import React from 'react'
import logo from '../../components/Images/AKTechHUB.png';
import './header.css'

const header = () => {
    return (
        <div class="custom-header-inner">
            <div class="container">
                <div class="header-">
                    <a href="#" class="custom-nav-logo">
                        <div class="logo-wrapper"><img class="img-fluid" title="aktechhub" alt="aktechhub" src={logo} /></div>
                        <span class="logo-ttl">aktechhub</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default header;