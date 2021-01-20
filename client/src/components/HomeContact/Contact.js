import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        sent: false
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubject = (e) => {
        this.setState({
            subject: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message

        }
        axios.post('/api/form',data)
        .then(res => {
            this.setState({
                sent: true,
            },this.resetForm())
        })
        .catch(() => {
            console.log('message not sent');
        })
    }

    //reset form 
    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })

        setTimeout(() => {
            this.setState({
                sent: false
            })
        },3000)
    }

    render(){
        return (
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-map"></i>
                                <h3>Our Address</h3>
                                <p>201 Rajiv Apartment Vimal Diary, 401105</p>
                            </div>
                        </div>

                        <div className="col-lg-3 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>parvezinamdar9867@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 d-flex align-items-stretch">
                            <div className="info-box ">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p><a href="tel:+919867822851">+91 986 782 2851</a></p>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <form onSubmit={this.formSubmit} method="post" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-lg-6 form-group">
                                        <input type="text" 
                                            name="name" 
                                            className="form-control" 
                                            id="name" 
                                            placeholder="First Name" 
                                            data-rule="minlen:4" 
                                            data-msg="Please enter at least 4 chars" 
                                            value={this.state.name}
                                            onChange={this.handleName}
                                        />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="email" 
                                            className="form-control" 
                                            name="email" id="email" 
                                            placeholder="Your Email" 
                                            data-rule="email" 
                                            data-msg="Please enter a valid email" 
                                            value={this.state.email}
                                            onChange={this.handleEmail}
                                        />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control" 
                                        name="subject" 
                                        id="subject" 
                                        placeholder="Subject" 
                                        data-rule="minlen:4" 
                                        data-msg="Please enter at least 8 chars of subject" 
                                        value={this.state.subject}
                                        onChange={this.handleSubject}
                                    />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        className="form-control" 
                                        name="message" 
                                        rows="5" 
                                        data-rule="required" 
                                        data-msg="Please write something for us" 
                                        placeholder="Message"
                                        value={this.state.message}
                                        onChange={this.handleMessage}></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                { this.state.sent ? <p>Message sent</p> : null}
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}

export default Contact;