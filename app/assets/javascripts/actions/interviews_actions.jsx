(() => {
    class InterviewsActions {
        constructor() {
            this.generateActions(
                'storeInterviews'
            );
        }

        fetchInterviews() {
            const resolve = (response) => this.storeInterviews(response);
            APIRequester.getJSON(APIConstants.interviews.collection, resolve);
            return true;
        }

        createInterview(params) {
            const resolve = (response) => this.storeInterviews(response.resource);
            APIRequester.post(APIConstants.interviews.collection, params, resolve);
            return true;
        }

        resetInterviews() {
            const resolve = (response) => this.storeInterviews(response.resource);
            APIRequester.delete(APIConstants.interviews.collection, resolve);
            return true;
        }

        updateInterview(id, params, extraSuccess) {
            const resolve = (response) => {
                this.storeInterviews(response.resource);
                extraSuccess();
            }
            APIRequester.put(APIConstants.interviews.member(id), params, resolve);
            return true;
        }

        deleteInterview(id) {
            const resolve = (response) => this.storeInterviews(response.resource);
            APIRequester.delete(APIConstants.interviews.member(id), resolve);
            return true;
        }
    }
    this.InterviewsActions = alt.createActions(InterviewsActions);
})();
