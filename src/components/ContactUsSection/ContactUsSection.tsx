import * as React from "react";
import { Container } from "reactstrap";
import "./ContactUsSection.scss";

interface State {
    name: string;
    email: string;
    company: string;
    message: string;
    isNameValid?: boolean | null;
    isEmailValid?: boolean | null;
    isCompanyValid?: boolean | null;
    isMessageValid?: boolean | null;
}

export default class ContactUsSection extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
            company: "",
            message: "",
            isNameValid: undefined,
            isEmailValid: undefined,
            isCompanyValid: undefined,
            isMessageValid: undefined
        };
    }
    public render() {
        const {
            name,
            email,
            company,
            message,
            isNameValid,
            isEmailValid,
            isCompanyValid,
            isMessageValid
        } = this.state;
        return (
            <div className="Contact-us-section" id="contact">
                <Container>
                    <div className="section-name-container">
                        <div className="section-title-container">
                            <span className="section-title">Contact Us</span>
                        </div>
                        <div className="section-description-container">
                            <span className="section-description">
                                For all inquiries or requests, please get in
                                touch! Let's explore how we can collaborate.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="contact-form">
                            <div className="form-group">
                                <input
                                    name="name"
                                    className={`form-control ${isNameValid ===
                                        false && "error"}`}
                                    placeholder="Name"
                                    type="text"
                                    value={name}
                                    onChange={this.handleNameChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className={`form-control ${isEmailValid ===
                                        false && "error"}`}
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className={`form-control ${isCompanyValid ===
                                        false && "error"}`}
                                    placeholder="Company"
                                    name="company"
                                    type="text"
                                    value={company}
                                    onChange={this.handleCompanyChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className={`form-control ${isMessageValid ===
                                        false && "error"}`}
                                    placeholder="Message"
                                    name="message"
                                    rows={7}
                                    value={message}
                                    onChange={this.handleMessageChange}
                                />
                            </div>
                            <div className="submit-btn-container">
                                <div
                                    className="submit-btn"
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    private handleSubmit = () => {
        if (!this.checkName()) {
            return;
        }
        if (!this.checkEmail()) {
            return;
        }
        if (!this.checkCompany()) {
            return;
        }
        if (!this.checkMessage()) {
            return;
        }
    };

    private checkName = () => {
        const { name } = this.state;
        if (!name) {
            this.setState({
                isNameValid: false
            });
            return false;
        }
        this.setState({
            isNameValid: true
        });
        return true;
    };

    private checkEmail = () => {
        const { email } = this.state;
        if (!email) {
            this.setState({
                isEmailValid: false
            });
            return false;
        }
        if (!this.validateEmail(email)) {
            this.setState({
                isEmailValid: false
            });
            return false;
        }
        this.setState({
            isEmailValid: true
        });
        return true;
    };

    private validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    private checkCompany = () => {
        const { company } = this.state;
        if (!company) {
            this.setState({
                isCompanyValid: false
            });
            return false;
        }
        this.setState({
            isCompanyValid: true
        });
        return true;
    };

    private checkMessage = () => {
        const { message } = this.state;
        if (!message) {
            this.setState({
                isMessageValid: false
            });
            return false;
        }
        this.setState({
            isMessageValid: true
        });
        return true;
    };

    private handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value, isNameValid: undefined });
    };

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value, isEmailValid: undefined });
    };

    private handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ company: e.target.value, isComapnyValid: undefined });
    };

    private handleMessageChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        this.setState({ message: e.target.value, isMessageValid: undefined });
    };
}