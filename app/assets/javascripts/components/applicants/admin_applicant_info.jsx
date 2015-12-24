/**
 * @prop applicant - the info about this applicant
 */
class AdminApplicantInfo extends React.Component {

    _renderInput(name, label) {
        return (
            <fieldset className="input-container">
                <label>{label}</label>
                <input name={name} onChange={this.props.onChange}
                    value={this.props.applicant[name]} readOnly />
            </fieldset>
        );
    }

    render() {
        return (
            <div className="admin-applicant-info">
                <div className="applicant-large-img">
                    <img src={this.props.applicant.picture} />
                </div>
                { this._renderInput("full_name", "Full Name") }
                { this._renderInput("year", "Year") }
                { this._renderInput("email", "Email") }
                { this._renderInput("gpa", "GPA") }
                { this._renderInput("units", "Spring 2016 Units") }
                { this._renderInput("phone", "Phone Number") }
            </div>
        );
    }
}

AdminApplicantInfo.propTypes = { applicant : React.PropTypes.object.isRequired };
