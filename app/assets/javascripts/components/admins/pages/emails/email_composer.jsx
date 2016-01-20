/**
 * @prop type - the type for this email composer
 */
class EmailComposer extends AltComponent {

    componentWillMount() {
        this.setState(EmailsStore.getState());
    }

    componentDidMount() {
        EmailsStore.listen(this._listener);
        EmailsActions.fetchEmail(this.props.type);
    }

    componentWillUnmount() {
        EmailsStore.unlisten(this._listener);
    }

    _formatType(type) {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }

    _attemptSave = (e) => {
        EmailsActions.updateEmail(this.props.type,
            { email : this.state[this.props.type] });
    }

    _attemptSend = (e) => {
        EmailsActions.sendEmails(this.props.type,
            { email : this.state[this.props.type] });
    }

    render() {
        return (
            <div>
                <h3>{`Compose ${this._formatType(this.props.type)} Emails`}</h3>
                <textarea className="email-content" name={this.props.type}
                    value={this.state[this.props.type]}
                    onChange={this._onInputChange} />
                <div className="email-buttons-container">
                    <button type="button" name="save" className="button save-email-button"
                            onClick={this._attemptSave}>
                        Save Content
                    </button>
                    <button type="button" name="send" className="button submit-button"
                            onClick={this._attemptSend}>
                        Send Emails
                    </button>
                </div>
            </div>
        );
    }
}

EmailComposer.propTypes = { type : React.PropTypes.string.isRequired };
