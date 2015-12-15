class LoginModal extends DefaultForm {

    _attemptLogin = (e) => {
        this._attemptAction(APIConstants.sessions.sign_in,
            { applicant : this._formFields() });
    }

    _handleKeydown = (e) => {
        if (e.which == 13) {
            this._attemptLogin();
        }
    }

    render() {
        return (
            <div>
                <form>
                    <fieldset className="input-container">
                        <label>Email</label>
                        <input name="email" type="text" autoFocus
                            onKeyDown={this._handleKeydown}
                            onChange={this._handleChange} />
                    </fieldset>
                    <fieldset className="input-container">
                        <label>Password</label>
                        <input name="password" type="password"
                            onKeyDown={this._handleKeydown}
                            onChange={this._handleChange} />
                    </fieldset>
                    <input name="submit" type="button" value="Login"
                        className="submit-button login-button"
                        onClick={this._attemptLogin} />
                </form>
            </div>
        );
    }
}
