/**
 * @prop applicant - applicant to display
 */
class ApplicantCard extends React.Component {

    _renderInfo(label, attribute) {
        return (
            <div className="applicant-info">
                <label>{`${label}:`}</label>
                <span>{this.props.applicant[attribute]}</span>
            </div>
        );
    }

    render() {
        return (
            <div className="applicant-card">
                <a href={`/applicants/${this.props.applicant.id}`}>
                    <div className="applicant-card-img">
                        <img className="applicant-small-img"
                            src={this.props.applicant.picture} />
                    </div>
                    <div className="applicant-info-container">
                        { this._renderInfo("Name", "full_name") }
                        { this._renderInfo("Year", "year") }
                        { this._renderInfo("GPA", "gpa") }
                        { this._renderInfo("Major", "major") }
                    </div>
                </a>
            </div>
        );
    }
}

ApplicantCard.propTypes = { applicant : React.PropTypes.object.isRequired };
