(() => {
    class ResponsesActions {

        constructor() {
            this.generateActions(
                'storeResponses'
            );
        }

        fetchResponses(id) {
            const resolve = (response) => this.storeResponses(response);
            APIRequester.getJSON(APIConstants.applicants.responses(id), resolve);
            return true;
        }

        updateResponses(id, params) {
            const resolve = (response) => this.storeResponses(response.resource);
            APIRequester.post(APIConstants.applicants.responses(id), params,
                resolve);
            return true;
        }
    }
    this.ResponsesActions = alt.createActions(ResponsesActions);
})();
