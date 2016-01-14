/* Enum for which nested attributes to update */
const Attributes = {
    APPLICANT : "applicant",
    RESUME    : "resume",
    PICTURE   : "picture"
}

/* Enum for which view type to display */
const ApplicationView = {
    STUDENT : 0,
    ADMIN   : 1,
}

/**
 * @prop applicant_id - id for this applicant
 */
class StudentApplication extends AltComponent {

    componentWillMount() {
        this.setState(ApplicantStore.getState());
    }

    componentDidMount() {
        ApplicantStore.listen(this._listener);
        ApplicantActions.fetchApplicant(this.props.applicant_id);
    }

    componentWillUnmount() {
        ApplicantStore.unlisten(this._listener);
    }

    _attemptSave = (e) => {
        ApplicantActions.updateApplicant(this.props.applicant_id,
            this.state.applicant);
    }

    _attemptSubmit = (e) => {
        ApplicantActions.changeApplicant(APIConstants.applicants.submit(
            this.props.applicant_id), this.state.applicant);
    }

    _onResponseChange = (e) => {
        const index = _.findIndex(this.state.applicant.responses, (response) => {
            return response.id == $(e.target).attr("name");
        });
        const newState = React.addons.update(this.state.applicant, {
            responses : {
                [index] : { answer : { $set: $(e.target).val() } }
            }
        });
        this.setState({ applicant : newState });
    }

    _onUpload = (e) => {
        const formData = new FormData();
        formData.append("file", $(e.target)[0].files[0]);
        const extraFields = { processData : false, contentType : false };
        ApplicantActions.uploadDocument(this.props.applicant_id, formData,
            extraFields, $(e.target).attr("name"), this.state.applicant);
    }

    render() {
        const disableUpdate = (this.state.applicant.submit || this.props.late);
        return (
            <div>
                <ApplicantInfo applicant = {this.state.applicant}
                               onChange  = {this._onChange(Attributes.APPLICANT)} />
                <Application responses = {this.state.applicant.responses}
                             onChange  = {this._onResponseChange}
                             view      = {ApplicationView.STUDENT} />
                <ApplicantDocuments applicant = {this.state.applicant}
                                    disabled  = {disableUpdate}
                                    onUpload  = {this._onUpload} />
                <button type="button" name="save" className="save-button"
                        onClick={this._attemptSave} disabled={disableUpdate}>
                    Save
                </button>
                <button type="button" name="submit" className="submit-button"
                        onClick={this._attemptSubmit} disabled={disableUpdate}>
                    Submit
                </button>
            </div>
        );
    }
}

StudentApplication.propTypes = { applicant_id : React.PropTypes.string.isRequired };
