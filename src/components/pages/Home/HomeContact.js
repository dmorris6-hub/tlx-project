import React from 'react'
import './HomeContact.css'
import { Button } from '../../Button';

function HomeContact() {
    return (
        <div className='hc-container'>
            <section className='hc-contact'>
                <h1 className='hc-heading'>
                    CONTACT
                </h1>
                
                <div className='input-areas hc-row'>
                    <div className='hc-col'>
                        <h3 className='hc-desc-header'>
                            Send us a message
                        </h3>
                        <br></br>
                        <p className='hc-desc-text'>
                            <br></br>
                            If you would like get in touch with a member of our team (or just share your thoughts on a recent show) feel free to fill out the boxes to the right.
                            <br></br>
                            <br></br>
                            <i>Business inquiries will be addressed within three (3) business days.</i>
                        </p>
                    </div>
                    <div className='hc-col'>
                        <form>
                            <input className='hc-input' id="fname" name="firstname" placeholder="Your Name" />
                            <input
                            className='hc-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                            />
                            <textarea className='hc-message hc-row-form' id="subject" name="subject" placeholder="Message">
                            </textarea>
                            

                            <Button buttonStyle='btn--outline'>SUBMIT</Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeContact
