/* Enum for which nested attributes to update */
const Attributes = {
    APPLICANT : "applicant",
    RESPONSE  : "response"
}

/**
 * @prop applicant_id - id for this applicant
 */
class StudentApplication extends AltComponent {

    componentWillMount() {
        this.setState(ApplicantStore.getState());
        this.setState(ResponsesStore.getState());
    }

    componentDidMount() {
        ApplicantStore.listen(this._listener);
        ResponsesStore.listen(this._listener);
        ApplicantActions.fetchApplicant(this.props.applicant_id);
        ResponsesActions.fetchResponses(this.props.applicant_id);
    }

    componentWillUnmount() {
        ApplicantStore.unlisten(this._listener);
        ResponsesStore.unlisten(this._listener);
    }

    _attemptSave = (e) => {
        ApplicantActions.updateApplicant(this.props.applicant_id,
            this.state.applicant);
    }

    render() {
        return (
            <div>
                <ApplicantInfo applicant = {this.state.applicant}
                               onChange  = {this._onChange(Attributes.APPLICANT)} />
                <Application responses = {this.state.responses}
                             onChange  = {this._onChange(Attributes.RESPONSE)} />
                <button type="button" name="save" className="submit-button"
                    onClick={this._attemptSave}>
                    Save
                </button>
            </div>
        );
    }
}

StudentApplication.propTypes = { applicant_id : React.PropTypes.number.isRequired };
