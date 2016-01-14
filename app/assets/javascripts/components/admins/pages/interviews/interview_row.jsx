/**
 * @prop interview - information to display for this interview
 */
class InterviewRow extends React.Component {

    _mapApplicant = (applicant) => {
        return (
            <ApplicantCell applicant = {applicant}
                           key       = {applicant.id} />
        );
    }

    render() {
        const applicants = this.props.interview.applicants.map(this._mapApplicant);
        return (
            <tr className="interview-row">
                <td>
                    <EditableTimeslot interview = {this.props.interview} />
                </td>
                { applicants }
            </tr>
        );
    }
}

InterviewRow.propTypes = { interview : React.PropTypes.object.isRequired };
