/* Number of admins for the portal */
const NUM_ADMINS = 5;

/**
 * @prop applicant - applicant to display for this row
 */
class ApplicantRow extends React.Component {

    _renderDecisions() {
        return _.range(NUM_ADMINS).map((index) => {
            const decision = this.props.applicant.decisions[index];
            return (
                <td key={index}>
                    <span className={`decision-${decision}`} />
                </td>
            );
        });
    }

    _onRowClick = (e) => {
        window.location.href = `/applicants/${this.props.applicant.id}`;
    }

    render() {
        return (
            <tr className="applicant-table-row" onClick={this._onRowClick}>
                <td>
                    { this.props.applicant.full_name }
                </td>
                <td>
                    { this.props.applicant.year }
                </td>
                <td>
                    { this.props.applicant.gpa }
                </td>
                <td>
                    { this.props.applicant.major }
                </td>
                { this._renderDecisions() }
            </tr>
        );
    }
}

ApplicantRow.propTypes = { applicant : React.PropTypes.object.isRequired };
