/**
 * @prop token - reset token for this request
 */
class ResetPassword extends DefaultForm {

    constructor(props) {
        super(props);
        this.state = {
            token    : this.props.token,
            password : ""
        };
    }

    _attemptSubmit = (e) => {
        this._attemptAction(APIConstants.passwords.reset, this.state);
    }

    render() {
        return (
            <div className="reset-form">
                <form>
                    { this._renderInput("password", "New Password", "password") }
                    { this._renderInput("password_confirmation", "Password Confirmation", "password") }
                    <fieldset className="input-container">
                        <label>Password Token</label>
                        <input type="text" name="token" value={this.props.token}
                            readOnly />
                    </fieldset>
                    <input type="button" value="Reset Password"
                        className="submit-button reset-button"
                        onClick={this._attemptSubmit} />
                </form>
            </div>
        );
    }
}

ResetPassword.propTypes = { token : React.PropTypes.string.isRequired };
