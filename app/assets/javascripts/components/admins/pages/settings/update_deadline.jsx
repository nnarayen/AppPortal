/**
 * @prop deadline - the current deadline to display
 */
class UpdateDeadline extends AltComponent {

    constructor(props) {
        super(props);
        this.state = { date : this.props.deadline };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ date : nextProps.deadline });
    }

    _updateDeadline = (e) => {
        SettingsActions.updateSettings({ deadline : this.state.date });
    }

    render() {
        return (
            <div className="update-deadline-container">
                <h3>Application Deadline</h3>
                <DatePicker value         = {this.state.date}
                            onDateChange  = {this._onDateChange}
                            onInputChange = {this._onInputChange} />
                <button type="button" onClick={this._updateDeadline}
                    className="button">
                    Update Deadline
                </button>
            </div>
        );
    }
}

UpdateDeadline.propTypes = { deadline : React.PropTypes.string };
