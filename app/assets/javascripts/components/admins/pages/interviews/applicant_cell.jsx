/**
 * @prop applicant - information to display for this applicant
 */
class ApplicantCell extends React.Component {

    _onClick = (e) => {
        window.location.href = `/applicants/${this.props.applicant.id}`;
    }

    render() {
        return (
            <td className="applicant-cell" onClick={this._onClick}>
                { this.props.applicant.full_name }
            </td>
        );
    }
}

ApplicantCell.propTypes = { applicant : React.PropTypes.object.isRequired };
