import React, { useState } from 'react';
import logo from '../../components/Images/AKTechHUB.png';
import './header.css';
import Button from 'react-bootstrap/Button';
import Connect_modal from '../connect-modal/connect_modal';


function Header() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <div className='custom-header-inner'>
                <div className="container">
                    <div className="header">
                        <a href="#" className="custom-nav-logo">
                            <div className="logo-wrapper"><img className="img-fluid" title="aktechhub" alt="aktechhub" src={logo} /></div>
                            <span className="logo-ttl">aktechhub</span>
                        </a>
                        <Button className="button" type="button" onClick={handleShow}>
                            <p className="button__text">
                                <span style={{ '--index': 0 }}>C</span>
                                <span style={{ '--index': 1 }}>O</span>
                                <span style={{ '--index': 2 }}>N</span>
                                <span style={{ '--index': 3 }}>N</span>
                                <span style={{ '--index': 4 }}>E</span>
                                <span style={{ '--index': 5 }}>C</span>
                                <span style={{ '--index': 6 }}>T</span>
                                <span style={{ '--index': 7 }}> </span>
                                <span style={{ '--index': 8 }}>A</span>
                                <span style={{ '--index': 9 }}>K</span>
                                <span style={{ '--index': 10 }}>T</span>
                                <span style={{ '--index': 11 }}>E</span>
                                <span style={{ '--index': 12 }}>C</span>
                                <span style={{ '--index': 13 }}>H</span>
                                <span style={{ '--index': 14 }}></span>
                                <span style={{ '--index': 15 }}>H</span>
                                <span style={{ '--index': 16 }}>U</span>
                                <span style={{ '--index': 17 }}>B</span>
                            </p>

                            <div className="button__circle">
                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="button__icon"
                                    width="14"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>

                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    width="14"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="button__icon button__icon--copy"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
           {show && <Connect_modal show={show} handleClose={handleClose} />}
          
        </>
    )
}
export default Header;