(() => {
    class ApplicantStore {

        constructor() {
            this.bindListeners({
                handleStoreApplicant  : ApplicantActions.STORE_APPLICANT,
                handleAddAttribute    : ApplicantActions.ADD_ATTRIBUTE,
                handleDeleteAttribute : ApplicantActions.DELETE_ATTRIBUTE
            });
            this.applicant = {
                responses : [],
                comments  : [],
            };
        }

        handleStoreApplicant(response) {
            this.applicant = response;
        }

        /* Params from Actions are: [Doc Link, Applicant, Attribute, Filename] */
        handleAddAttribute(params) {
            this.applicant = params[1];
            this.applicant[params[2]] = params[0];
            this.applicant[`${params[2]}File`] = params[3];
        }

        handleDeleteAttribute(params) {
            this.applicant[`${params}File`] = DEFAULT_FILE;
        }
    }
    this.ApplicantStore = alt.createStore(ApplicantStore);
})();
