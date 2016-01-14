class ApplicantSearch extends AltComponent {

    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {
        ApplicantsActions.fetchApplicants(this.state);
    }

    componentDidUpdate(_prevProps, _prevState) {
        ApplicantsActions.fetchApplicants(this.state);
    }

    render() {
        return (
            <div className="search-applicant-container">
                <input name="filter" type="text" onChange={this._onInputChange}
                    placeholder="Search Applicants" />
            </div>
        )
    }
}
