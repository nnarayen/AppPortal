(() => {
    class ApplicantActions {

        constructor() {
            this.generateActions(
                'storeApplicant',
                'addAttribute',
                'deleteAttribute'
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

        changeApplicant(route, params) {
            const resolve = (response) => this.storeApplicant(response.resource);
            APIRequester.post(route, params, resolve);
            return true;
        }

        uploadDocument(id, params, extraFields, attribute, applicant, file, ensure) {
            const resolve = (resp) => this.addAttribute(resp.resource, applicant, attribute, file);
            const error = () => this.deleteAttribute(attribute);
            APIRequester.post(APIConstants.applicants.upload(id, attribute),
                params, resolve, extraFields, error, ensure);
            return true;
        }
    }
    this.ApplicantActions = alt.createActions(ApplicantActions);
})();
