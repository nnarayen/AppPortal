class CategoryViews extends AltComponent {

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

    _filterApplicants(status) {
        return _.filter(this.state.applicants, (applicant) => {
            return applicant.status == DecisionTypes[status];
        });
    }

    render() {
        const categories = _.keys(DecisionTypes).map((status) => {
            return (
                <CategoryView applicants = {this._filterApplicants(status)}
                              type       = {status}
                              key        = {DecisionTypes[status]} />
            );
        });

        return (
            <div className="row">
                { categories }
            </div>
        );
    }
}
