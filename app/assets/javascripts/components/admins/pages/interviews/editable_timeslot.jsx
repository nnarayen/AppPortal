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
                    fa-pencil-square-o edit-timeslot-button" />
            );
        }
        return editButton;
    }

    _renderUpdateButtons() {
        let updateButtons;
        if (this.state.editable) {
            updateButtons = (
                <div className="update-buttons-container">
                    <button className="button-small submit-button
                            save-timeslot-button"
                            onClick={this._attemptUpdate}>
                        <span className="fa fa-floppy-o"/>
                        Save
                    </button>
                    <button className="button-small delete-timeslot-button"
                            onClick={this._attemptDelete}>
                        <span className="fa fa-trash-o"/>
                        Delete
                    </button>
                </div>
            );
        }
        return updateButtons;
    }

    render() {
        const formattedTime = formatDateTime(this.state.interview.timeslot);
        return (
            <div className="editable-timeslot-container">
                <EditableInput data         = {formattedTime}
                               editable     = {this.state.editable}
                               handleChange = {this._onInputChange}
                               toggleEdit   = {this._toggleEdit} />
                { this._renderUpdateButtons() }
            </div>
        )
    }
}

EditableTimeslot.propTypes = { interview : React.PropTypes.object.isRequired };
