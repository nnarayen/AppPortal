class LoginModal extends DefaultForm {

    _attemptSubmit = (e) => {
        this._attemptAction(APIConstants.sessions.sign_in,
            { applicant : this._formFields() });
    }

    render() {
        return (
            <div className="login-form">
                <form>
                    { this._renderInput("email", "Email", "text", "email@berkeley.edu", "focus") }
                    { this._renderInput("password", "Password", "password") }
                    <input name="submit" type="button" value="Login"
                        className="submit-button login-button"
                        onClick={this._attemptSubmit} />
                </form>
            </div>
        );
    }
}
