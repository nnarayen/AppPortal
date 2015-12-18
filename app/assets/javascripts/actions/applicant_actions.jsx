(() => {
    class ApplicantActions {

        constructor() {
            this.generateActions(
                'storeApplicant'
            );
        }

        fetchApplicant(id) {
            const resolve = (response) => this.storeApplicant(response);
            APIRequester.getJSON(APIConstants.applicants.member(id), resolve);
            return true;
        }

        updateApplicant(id, params) {
            const resolve = (response) => this.storeApplicant(response.resource);
            APIRequester.put(APIConstants.applicants.member(id), params, resolve);
            return true;
        }

        uploadDocument(id, params, extraFields, attribute) {
            const resolve = (response) => this.storeApplicant(response.resource);
            APIRequester.post(APIConstants.applicants.upload(id, attribute),
                params, resolve, extraFields);
            return true;
        }
    }
    this.ApplicantActions = alt.createActions(ApplicantActions);
})();
