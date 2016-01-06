(() => {
    class EmailsActions {
        constructor() {
            this.generateActions(
                'storeEmail'
            );
        }

        fetchEmail(type) {
            const resolve = (response) => this.storeEmail(response, type);
            APIRequester.getJSON(APIConstants.emails.member(type), resolve);
            return true;
        }

        updateEmail(type, params) {
            const resolve = (response) => this.storeEmail(response.resource, type);
            APIRequester.put(APIConstants.emails.member(type), params, resolve);
            return true;
        }

        sendEmails(type, params) {
            const resolve = (response) => this.storeEmail(response.resource, type);
            APIRequester.post(APIConstants.emails.send(type), params, resolve);
            return true;
        }
    }
    this.EmailsActions = alt.createActions(EmailsActions);
})();
