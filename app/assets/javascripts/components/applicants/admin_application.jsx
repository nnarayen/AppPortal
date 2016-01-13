/**
 * @prop applicant_id - id for this applicant
 */
class AdminApplication extends AltComponent {

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
            <div className="admin-application">
                <AdminApplicantInfo applicant = {this.state.applicant} />
                <div className="applicant-resume">
                    <h3>Resume</h3>
                    <object data={this.state.applicant.resume} />
                </div>
                <Application responses = {this.state.applicant.responses}
                             view      = {ApplicationView.ADMIN} />
                <CommentSection comments     = {this.state.applicant.comments}
                                applicant_id = {this.state.applicant.id} />
                <DecisionButtons applicant = {this.state.applicant} />
            </div>
        );
    }
}

AdminApplication.propTypes = { applicant_id : React.PropTypes.string.isRequired };
