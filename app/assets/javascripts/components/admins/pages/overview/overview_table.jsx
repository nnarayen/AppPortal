/* Table Headers */
TABLE_HEADERS = [
    "Applicant Name", "Year", "GPA", "Major", "PRES", "IVP", "VPD", "PVP", "EVP"
];

class OverviewTable extends AltComponent {

    componentWillMount() {
        this.setState(ApplicantsStore.getState());
    }

    componentDidMount() {
        ApplicantsStore.listen(this._listener);
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

        const headers = TABLE_HEADERS.map((header) => {
            return <th key={header}>{header}</th>
        });

        return (
            <div className="applicant-overview-container">
                <table className="table overview-table">
                    <thead>
                        <tr>
                            { headers }
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
