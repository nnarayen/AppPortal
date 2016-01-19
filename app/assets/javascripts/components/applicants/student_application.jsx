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

    _toggleButton = (button) => {
        const toggleFunc = () => {
            $(button).prop("disabled", (_, val) => { return !val });
        };
        return toggleFunc;
    }

    _createFormData = (e) => {
        const formData = new FormData();
        formData.append("file", $(e.target)[0].files[0]);
        return formData;
    }

    _onUpload = (e, filename) => {
        const formData = this._createFormData(e);
        const attribute = $(e.target).attr("name");
        const extraFields = { processData : false, contentType : false };
        const ensure = this._toggleButton(e.target);
        ensure(); // Temporarily disable upload button
        ApplicantActions.uploadDocument(this.props.applicant_id, formData,
            extraFields, attribute, this.state.applicant, filename, ensure);
    }

    render() {
        return (
            <div>
                <ApplicantInfo applicant = {this.state.applicant}
                               onChange  = {this._onChange(Attributes.APPLICANT)} />
                <hr />
                <Application responses = {this.state.applicant.responses}
                             onChange  = {this._onResponseChange}
                             view      = {ApplicationView.STUDENT} />
                <ApplicantDocuments applicant = {this.state.applicant}
                                    onUpload  = {this._onUpload} />
                <button type="button" name="save" className="button save-button"
                        onClick={this._attemptSave}>
                    Save
                </button>
                <button type="button" name="submit" className="button submit-button"
                        onClick={this._attemptSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

StudentApplication.propTypes = { applicant_id : React.PropTypes.string.isRequired };
