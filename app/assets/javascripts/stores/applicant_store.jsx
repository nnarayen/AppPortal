(() => {
    class ApplicantStore {

        constructor() {
            this.bindListeners({
                handleStoreApplicant: ApplicantActions.STORE_APPLICANT,
                handleAddAttribute: ApplicantActions.ADD_ATTRIBUTE
            });
            this.applicant = {
                responses : [],
                comments  : [],
            };
        }

        handleStoreApplicant(response) {
            this.applicant = response;
        }

        /* Params from ApplicantActions are: [Resource, Attribute] */
        handleAddAttribute(params) {
            this.applicant[params[1]] = params[0];
        }
    }
    this.ApplicantStore = alt.createStore(ApplicantStore);
})();
