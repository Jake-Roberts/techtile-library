'use client'
import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div className='contactContainer'>
            <div className='ourInfo'>
                <h2>Contact Information</h2>
                <p><strong>Address:</strong> 1811 W. Royal Hunte Dr., Suite 1
                Cedar City, UT 84720</p>
                <p><strong>Phone:</strong> (435) 586-1131</p>
                <p><strong>Email:</strong> info@company.com</p>
            </div>
            <div className='formContainer'>
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Phone" required />
                    <textarea placeholder="Questions" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
