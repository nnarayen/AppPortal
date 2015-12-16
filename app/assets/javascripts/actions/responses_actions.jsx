(() => {
    class ResponsesActions {

        constructor() {
            this.generateActions(
                'storeResponses'
            );
        }

        fetchResponses(id) {
            var resolve = (response) => this.storeResponses(response);
            APIRequester.getJSON(APIConstants.applicants.responses(id), resolve);
            return true;
        }

        updateResponses(id, params) {
            var resolve = (response) => this.storeResponses(response.resource);
            APIRequester.put(APIConstants.applicants.responses(id), params, resolve);
            return true;
        }
    }
    this.ResponsesActions = alt.createActions(ResponsesActions);
})();
