/**
 * @prop applicant - the info about this applicant
 */
class AdminApplicantInfo extends React.Component {

    _renderInput(name, label) {
        return (
            <div className="applicant-details">
                <h4 className="detail-label">{label}</h4>
                <h3 className="detail">{this.props.applicant[name]}</h3>
            </div>
        );
    }

    render() {
        return (
            <div className="admin-applicant-info row">
                <div className="col-md-3 col-sm-3">
                    <div className="applicant-large-img">
                        <img src={this.props.applicant.picture} />
                    </div>
                </div>
                <div className="col-md-9 col-sm-9">
                    <h2 className="applicant-name">
                        {this.props.applicant.full_name}
                    </h2>
                    <div className="detail-container">
                        { this._renderInput("major", "Major") }
                        { this._renderInput("year", "Year") }
                        { this._renderInput("gpa", "GPA") }
                        { this._renderInput("email", "Email") }
                        { this._renderInput("units", "Sp 2016 Units") }
                        { this._renderInput("phone", "Phone") }
                    </div>
                </div>
            </div>
        );
    }
}

AdminApplicantInfo.propTypes = { applicant : React.PropTypes.object.isRequired };
