class PasswordModal extends DefaultForm {

    _attemptSubmit = (e) => {
        this._attemptAction(APIConstants.passwords.send_reset, this.state);
    }

    render() {
        return (
            <div>
                <a onClick={this._focusInputField} data-toggle="modal"
                        className="register-link" data-target="#passwordModal">
                    Forgot Password?
                </a>
                <div className="modal fade" id="passwordModal" tabIndex={-1}
                        role="dialog" ref="modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title">
                                    Reset Password
                                </h1>
                            </div>
                            <div className="modal-body full-input-container">
                                { this._renderInput("email", "Email", "text", "email@berkeley.edu", "focus") }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="button"
                                        data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" name="submit"
                                        className="button submit-button"
                                        onClick={this._attemptSubmit}>
                                    Send Reset Instructions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
