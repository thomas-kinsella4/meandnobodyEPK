import React, {useRef, useState} from "react";

function Contact() {

    return (
        <div id="contact-section">
            <h1 id="contact-logo">ME + NOBODY</h1>
            <h3 id="contact-email">EMAIL: MEANDNOBODYBAND@GMAIL.COM</h3>
            <h3 id="contact-email">PHONE: 631-241-2582</h3>
            <div id="more-info">
            <h3 id="contact-email">FOR MORE, VIEW OUR WEBSITE HERE:</h3>
            <a href="https://meandnobody.com/" id="linktree" target="_blank">MEANDNOBODY.COM</a>
            </div>
      
            
            {/* <div id="contact-section-right">
                <h2 className="contact-content">SIGN UP FOR UPDATES</h2>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="email" placeholder="YOUR EMAIL" id="email-input" name="user_email" required></input>
                    <br></br>
                    {modalOpen ? 
                    <div className="contact-message">
                        <span id="modal-x" onClick={() => {
                            closeModal();
                        }}>X</span>
                        <h2>Thanks for signing up!</h2>
                    </div>
                    :
                    null
                    }
                    <button className="btn">SUBMIT</button>
                </form>
            </div> */}
        </div>
    )
}

export default Contact;
