(() => {
	class ApplicantStore {

		constructor() {
			this.bindListeners({
				handleStoreApplicant: ApplicantActions.STORE_APPLICANT
			});
			this.applicant = { };
		}

		handleStoreApplicant(response) {
			this.applicant = response;
		}
	}
	this.ApplicantStore = alt.createStore(ApplicantStore);
})();
