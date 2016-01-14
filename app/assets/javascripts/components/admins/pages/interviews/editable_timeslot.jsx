/**
 * @prop interview - information to display for this interview
 */
class EditableTimeslot extends AltComponent {

    constructor(props) {
        super(props);
        this.state = {
            interview : this.props.interview,
            editable  : false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ interview : nextProps.interview });
    }

    _toggleEdit = (e) => {
        this.setState({ editable : !this.state.editable });
    }

    _attemptUpdate = (e) => {
        const extraSuccess = () => { this._toggleEdit() }
        InterviewsActions.updateInterview(this.props.interview.id, this.state,
            extraSuccess);
    }

    _attemptDelete = (e) => {
        InterviewsActions.deleteInterview(this.props.interview.id);
    }

    _renderEditButton() {
        let editButton;
        if (!this.state.editable) {
            editButton = (
                <span onClick={this._toggleEdit} className="fa
                    fa-pencil-square-o" />
            );
        }
        return editButton;
    }

    _renderUpdateButtons() {
        let updateButtons;
        if (this.state.editable) {
            updateButtons = (
                <div className="update-buttons-container">
                    <span className="fa fa-floppy-o" onClick={this._attemptUpdate} />
                    <span className="fa fa-trash" onClick={this._attemptDelete} />
                </div>
            );
        }
        return updateButtons;
    }

    render() {
        const formattedTime = formatDateTime(this.state.interview.timeslot);
        return (
            <div className="editable-timeslot-container">
                { this._renderEditButton() }
                <EditableInput data         = {formattedTime}
                               editable     = {this.state.editable}
                               handleChange = {this._onInputChange} />
                { this._renderUpdateButtons() }
            </div>
        )
    }
}

EditableTimeslot.propTypes = { interview : React.PropTypes.object.isRequired };
