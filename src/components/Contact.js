import { useState } from 'react';
import '../styles/Contact.css';
import { send } from 'emailjs-com';

// const defaultFormValues = {
//     from_name: '',
//         to_name: '',
//         message: '',
//         reply_to: '',
// }

function ContactSection() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
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
            <h1>Say Hello!</h1>
            <form onSubmit={onSubmit} className="contactForm">
                <div className="contactToFromDiv">
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your Name'
                        value={toSend.from_name}
                        onChange={handleChange}
                        className="contactFromInput"
                    />
                    <input
                        type='text'
                        name='to_name'
                        placeholder='Caitlin Neathawk'
                        value={toSend.to_name}
                        onChange={handleChange}
                        className="contactToInput"
                    />
                </div>
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    className="contactEmailInput"
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                    className="contactMessageInput"
                />
                <button type='submit' className="contactSubmitBtn">SEND</button>
            </form>
        </section >
    );
}

export default ContactSection;