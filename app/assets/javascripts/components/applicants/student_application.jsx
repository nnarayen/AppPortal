/* Enum for which nested attributes to update */
const Attributes = {
    APPLICANT : "applicant",
    RESUME    : "resume",
    PICTURE   : "picture"
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
        ResponsesActions.updateResponses(this.props.applicant_id,
            { responses : JSON.stringify(this.state.responses) });
    }

    _onResponseChange = (e) => {
        const index = _.findIndex(this.state.responses, (response) => {
            return response.id == $(e.target).attr("name");
        });
        const newState = React.addons.update(this.state.responses, {
            [index]: { answer : { $set: $(e.target).val() } }
        });
        this.setState({ responses : newState });
    }

    _onUpload = (e) => {
        const formData = new FormData();
        formData.append("file", $(e.target)[0].files[0]);
        const extraFields = { processData : false, contentType : false };
        ApplicantActions.uploadDocument(this.props.applicant_id, formData,
            extraFields, $(e.target).attr("name"));
    }

    render() {
        return (
            <div>
                <ApplicantInfo applicant = {this.state.applicant}
                               onChange  = {this._onChange(Attributes.APPLICANT)} />
                <Application responses = {this.state.responses}
                             onChange  = {this._onResponseChange} />
                <ApplicantDocuments applicant = {this.state.applicant}
                                    onUpload  = {this._onUpload} />
                <button type="button" name="save" className="submit-button"
                    onClick={this._attemptSave}>
                    Save
                </button>
            </div>
        );
    }
}

StudentApplication.propTypes = { applicant_id : React.PropTypes.number.isRequired };
