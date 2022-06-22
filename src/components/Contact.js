import { useState } from 'react';
import '../styles/Contact.css';
import { send } from 'emailjs-com';


function ContactSection() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Caitlin',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_noopmg9',
            'template_qmsomwp',
            toSend,
            'HcaUXf75I1PPZnyJ2'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Thank you! Talk to you soon!")
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert("Uh oh! Something went wrong.")
            });


    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <section className="contactMain" id="contactSection">
            <h1>Say <span className="contactSpan">Hello</span>!</h1>
            <form onSubmit={onSubmit} className="contactForm">
                <input
                    type='text'
                    name='from_name'
                    placeholder='Your Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    className="contactFromInput"
                    required
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    className="contactEmailInput"
                    required
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                    className="contactMessageInput"
                    required
                />
                <button type='submit' className="contactSubmitBtn">SEND</button>
            </form>
        </section >
    );
}

export default ContactSection;