(() => {
    class ApplicantsStore {

        constructor() {
            this.bindListeners({
                handleStoreApplicants: ApplicantsActions.STORE_APPLICANTS
            });
            this.applicants = [];
        }

        handleStoreApplicants(response) {
            this.applicants = response;
        }
    }
    this.ApplicantsStore = alt.createStore(ApplicantsStore);
})();
