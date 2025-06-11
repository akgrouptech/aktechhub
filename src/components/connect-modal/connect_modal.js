import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const YOUR_RECAPTCHA_SITE_KEY = '6LdA2VwrAAAAANZOx0MYVa-GACkHZtUvoZCpC6g0';
const Connect_modal = ({ show, handleClose }) => {

    const form = useRef();
    const [verified, setVerified] = useState(false);

    const handleCaptcha = (value) => {
        setVerified(!!value); // reCAPTCHA token
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!verified) {
            alert('Please verify you are not a robot.');
            return;
        }
        emailjs.sendForm(
            'service_dufop3c',
            'template_z9wbzqg',
            form.current,
            'dCxLgFHz9wAh0vFa7' // Also called Public Key
        )
            .then((result) => {
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                alert('Failed to send message.');
                console.error(error);
            });
    };

    return (

        <Modal className="modal custom-modal" show={show} onHide={handleClose}>
            <Modal.Body className="custom-modal">
                <div className="feedback-wrapper">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <h2 className="con-title">Connect with Us</h2>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <label className="form-label">Email ID</label>
                                    <input type="email" name="user_email" id="" className="form-control" placeholder="Enter Email Address" autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input type="text" name="user_name" className="form-control" placeholder="Enter Name" autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <label className="form-label">Contact Number</label>
                                    <input type="text" name="user_contact" className="form-control" placeholder="Enter Contact Number" autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <label className="form-label">Your Query</label>
                                    <textarea className="form-control" name="user_message" placeholder="Enter Your Query" required />
                                </div>
                            </div>
                            <ReCAPTCHA
                                sitekey={YOUR_RECAPTCHA_SITE_KEY}
                                onChange={handleCaptcha}
                            />

                            <div className="custom-btn-section custom-btn-center">
                                <ul className="custom-btn-group">
                                    <li className="custom-btn-item">
                                        <button type="submit" id="" value="" className="btn btn-success custom-btn" title="Sunbmit">Submit</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Connect_modal