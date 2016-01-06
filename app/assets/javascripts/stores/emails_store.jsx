(() => {
    class EmailsStore {
        constructor() {
            this.bindListeners({
                handleStoreEmail: EmailsActions.STORE_EMAIL
            });
        }

        /* Params from EmailsActions are: [Resource, Type] */
        handleStoreEmail(params) {
            this[params[1]] = params[0];
        }
    }
    this.EmailsStore = alt.createStore(EmailsStore);
})();
