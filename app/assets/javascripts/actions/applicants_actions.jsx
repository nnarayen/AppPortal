(() => {
    class ApplicantsActions {

        constructor() {
            this.generateActions(
                'storeApplicants'
            );
        }

        fetchApplicants(params) {
            const resolve = (response) => this.storeApplicants(response);
            APIRequester.getJSON(APIConstants.applicants.collection, resolve,
                params);
            return true;
        }
    }

    this.ApplicantsActions = alt.createActions(ApplicantsActions);
})();
