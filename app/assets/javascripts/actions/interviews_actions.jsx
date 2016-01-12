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
    }
    this.InterviewsActions = alt.createActions(InterviewsActions);
})();
