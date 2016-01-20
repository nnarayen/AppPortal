/**
 * @prop applicant - information to display for this applicant
 */
class ApplicantCell extends React.Component {

    render() {
        return (
            <td className="applicant-cell">
                <a href={`/applicants/${this.props.applicant.id}`}>
                    { this.props.applicant.full_name }
                </a>
            </td>
        );
    }
}

ApplicantCell.propTypes = { applicant : React.PropTypes.object.isRequired };
