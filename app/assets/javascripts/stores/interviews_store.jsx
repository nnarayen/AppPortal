(() => {
    class InterviewsStore {
        constructor() {
            this.bindListeners({
                handleStoreInterviews: InterviewsActions.STORE_INTERVIEWS
            });
            this.interviews = [];
        }

        handleStoreInterviews(response) {
            this.interviews = response;
        }
    }
    this.InterviewsStore  = alt.createStore(InterviewsStore);
})();
