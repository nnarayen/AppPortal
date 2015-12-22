class OverviewTable extends AltComponent {

    componentWillMount() {
        this.setState(ApplicantsStore.getState());
    }

    componentDidMount() {
        ApplicantsStore.listen(this._listener);
        ApplicantsActions.fetchApplicants();
    }

    componentWillUnmount() {
        ApplicantsStore.unlisten(this._listener);
    }

    render() {
        const applicants = this.state.applicants.map((applicant) => {
            return (
                <ApplicantRow applicant = { applicant }
                              key       = { applicant.id } />
            );
        });

        return (
            <div className="applicant-overview-container">
                <table className="table overview-table">
                    <thead>
                        <tr>
                            <th>Applicant Name</th>
                            <th>Year</th>
                            <th>GPA</th>
                            <th>Major</th>
                            <th>PRES</th>
                            <th>IVP</th>
                            <th>PVP</th>
                            <th>VPD</th>
                            <th>EVP</th>
                        </tr>
                    </thead>
                    <tbody>
                        { applicants }
                    </tbody>
                </table>
            </div>
        );
    }
}
