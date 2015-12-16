/* Enum for which nested attributes to update */
const Attributes = {
    APPLICANT : "applicant",
    RESPONSES : "responses"
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

    render() {
        return (
            <div>
                <ApplicantInfo applicant = {this.state.applicant}
                               onChange  = {this._onChange(Attributes.APPLICANT)} />
            </div>
        );
    }
}

StudentApplication.propTypes = { applicant_id : React.PropTypes.number.isRequired };
