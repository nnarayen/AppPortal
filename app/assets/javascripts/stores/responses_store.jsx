(() => {
	class ResponsesStore {

		constructor() {
			this.bindListeners({
				handleStoreResponses : ResponsesActions.STORE_RESPONSES
			});
			this.responses = [];
		}

		handleStoreResponses(response) {
			this.responses = response;
		}
	}
	this.ResponsesStore = alt.createStore(ResponsesStore);
})();
