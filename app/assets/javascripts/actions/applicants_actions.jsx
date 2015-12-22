(() => {
    class ApplicantsActions {

        constructor() {
            this.generateActions(
                'storeApplicants'
            );
        }

        fetchApplicants() {
            const resolve = (response) => this.storeApplicants(response);
            APIRequester.getJSON(APIConstants.applicants.collection, resolve);
            return true;
        }
    }

    this.ApplicantsActions = alt.createActions(ApplicantsActions);
})();
