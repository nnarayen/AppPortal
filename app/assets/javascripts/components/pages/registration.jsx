class RegistrationModal extends DefaultForm {

    _attemptSubmit = (e) => {
        this._attemptAction(APIConstants.sessions.sign_up,
            { applicant : this._formFields() });
    }

    _renderInput(name, label, type, placeholder = null, focus = null) {
        const ref = focus ? "focus" : "submit";
        return (
            <fieldset className="input-container">
                <label>{label}</label>
                <input type={type} name={name} ref={ref} placeholder={placeholder}
                    onKeyDown={this._handleKeydown} onChange={this._handleChange} />
            </fieldset>
        );
    }

    render() {
        return (
            <div>
                <a onClick={this._focusInputField} data-toggle="modal"
                    data-target="#registrationModal">
                    Create an Account
                </a>
                <div className="modal fade" id="registrationModal" tabIndex={-1}
                        role="dialog" ref="modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create New Account</h4>
                            </div>
                            <div className="modal-body">
                                { this._renderInput("email", "Email", "text", "email@berkeley.edu", "focus") }
                                { this._renderInput("password", "Password", "password") }
                                { this._renderInput("password_confirmation", "Confirm Password", "password") }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="button"
                                        data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" name="submit"
                                        className="submit-button"
                                        onClick={this._attemptSubmit}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
