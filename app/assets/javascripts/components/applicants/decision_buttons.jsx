/* Enum for decision types */
const DecisionTypes = {
    Rejected  : 0,
    Undecided : 1,
    Accepted  : 2
}

/**
 * @prop applicant - the applicant for this decision
 */
class DecisionButtons extends React.Component {

    _attemptDecision = (e) => {
        ApplicantActions.changeApplicant(APIConstants.applicants.decide(
            this.props.applicant.id), { decision: $(e.target).attr("name") });
    }

    render() {
        const buttons = _.keys(DecisionTypes).map((key) => {
            return (
                <button type="button" name={DecisionTypes[key]} key={key}
                        className="button decision-button" onClick={this._attemptDecision}>
                    { key }
                </button>
            );
        });

        return (
            <div className="decision-buttons">
                { buttons }
            </div>
        );
    }
}

DecisionButtons.propTypes = { applicant : React.PropTypes.object.isRequired };
