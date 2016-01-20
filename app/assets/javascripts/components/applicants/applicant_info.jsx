/**
 * @prop applicant - the info about this applicant
 * @prop onChange  - callback function when inputs change
 */
class ApplicantInfo extends React.Component {

    _renderInput(name, label) {
        return (
            <fieldset className="input-container">
                <label>{label}</label>
                <input name={name} type="text" onChange={this.props.onChange}
                    value={this.props.applicant[name]} />
            </fieldset>
        );
    }

    render() {
        return (
            <div className={`scroll-${ScrollTargets.PERSONAL}`}>
                <h2 className="category-title">{CategoryTitles.PERSONAL}</h2>
                { this._renderInput("first_name", "First Name") }
                { this._renderInput("last_name", "Last Name") }
                { this._renderInput("year", "Year") }
                { this._renderInput("major", "Major") }
                { this._renderInput("gpa", "GPA") }
                { this._renderInput("units", "Spring 2016 Units") }
                { this._renderInput("phone", "Phone Number") }
            </div>
        );
    }
}

ApplicantInfo.propTypes = {
    applicant : React.PropTypes.object.isRequired,
    onChange  : React.PropTypes.func.isRequired
};
