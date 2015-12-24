/* Enum for decision types */
const DecisionTypes = {
    Reject    : 1,
    Undecided : 2,
    Accept    : 3
}

/**
 * @prop applicant - the applicant for this decision
 */
class DecisionButtons extends React.Component {

    _attemptDecision = (e) => {
        ApplicantActions.decideApplicant(this.props.applicant.id, {
            decision : $(e.target).attr("name")
        });
    }

    render() {
        const buttons = _.keys(DecisionTypes).map((key) => {
            return (
                <button type="button" name={DecisionTypes[key]} key={key}
                        className="decision-button" onClick={this._attemptDecision}>
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
