/**
 * @prop applicant_id - id for this applicant
 */
class InterviewScheduler extends AltComponent {

    componentWillMount() {
        this.setState(InterviewsStore.getState());
    }

    componentDidMount() {
        InterviewsStore.listen(this._listener);
        InterviewsActions.fetchInterviews();
    }

    componentWillUnmount() {
        InterviewsStore.unlisten(this._listener);
    }

    _scheduleInterview = (e) => {
        const data = { interview : this.state.interview };
        ApplicantActions.changeApplicant(
            APIConstants.applicants.schedule(this.props.applicant_id), data);
    }

    _mapInterview = (interview) => {
        return (
            <div className="interview-option" key={interview.id}>
                <input name="interview" type="radio" id={interview.id}
                    onChange={this._onInputChange} value={interview.id} />
                <label htmlFor={interview.id}>
                    { formatDateTime(interview.timeslot) }
                </label>
            </div>
        );
    }

    render() {
        return (
            <div className="interview-scheduler">
                { this.state.interviews.map(this._mapInterview) }
                <button type="button" className="button submit-button schedule-button"
                        onClick={this._scheduleInterview}>
                    Schedule Interview
                </button>
            </div>
        );
    }
}

InterviewScheduler.propTypes = { applicant_id : React.PropTypes.string.isRequired };
