import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
export default class Contact extends React.Component{

    
        //In order to set the email address and subject line for 
        //the contact form go to the bin/contact_me.php file
    render(){
        return(
            <ScrollableAnchor id={'contact'} >
                <div id='contactUs' className='clearfix'>

                    <div id='contactHeader'  >
                        <h1>Contact Us</h1>
                        <h3>Please fill out the contact form below and we will contact you in the next 24 hours</h3>
                    </div>

                    <div id='contactForm' className= 'col-xs-12 col-md-6 col-lg-6'>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Full Name:</label>
                                        <input type="text" className="form-control" id="name" 
                                        required data-validation-required-message="Please enter your name."
                                        />
                                        <p className="help-block"></p>
                                </div>
                            </div>

                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Phone Number:</label>
                                        <input type="tel" className="form-control" id="phone" 
                                        required data-validation-required-message="Please enter your phone number." 
                                        />
                                </div>
                            </div>

                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Email Address:</label>
                                        <input type="email" className="form-control" id="email" 
                                        required data-validation-required-message="Please enter your email address." 
                                        />
                                </div>
                            </div>

                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Message:</label>
                                        <textarea rows="7" cols="100" className="form-control" id="message" 
                                        required data-validation-required-message="Please enter your message" 
                                        maxLength="999" 
                                        style={{resize: "none"}}></textarea>
                                </div>
                            </div>
                        <div id="success"></div>
                        {/* <!-- For success/fail messages --> */}
                        <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
                        </form>
                    </div>
                    <div id='altContacts' className='col-xs-12 col-md-4 col-lg-4'>
                        <h3>Also you can:</h3>
                        <h3><span className="glyphicon glyphicon-envelope"></span>Write us: <br/> hello@xxxx.com</h3>
                        <h3><span className="glyphicon glyphicon-earphone"></span>Call us: <br/>2489838897</h3>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}
