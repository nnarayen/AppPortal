(() => {
    class ApplicantActions {

        constructor() {
            this.generateActions(
                'storeApplicant'
            );
        }

        fetchApplicant(id) {
            var resolve = (response) => this.storeApplicant(response);
            APIRequester.getJSON(APIConstants.applicants.member(id), resolve);
            return true;
        }

        updateApplicant(id, params) {
            var resolve = (response) => this.storeProfile(response);
            APIRequester.put(APIConstants.applicants.member(id), params, resolve);
            return true;
        }
    }
    this.ApplicantActions = alt.createActions(ApplicantActions);
})();
