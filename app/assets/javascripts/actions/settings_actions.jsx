(() => {
    class SettingsActions {
        constructor() {
            this.generateActions(
                'storeSettings'
            );
        }

        fetchSettings() {
            const resolve = (response) => this.storeSettings(response);
            APIRequester.getJSON(APIConstants.settings.collection, resolve);
            return true;
        }

        advanceSettings(params) {
            const resolve = (response) => this.storeSettings(response.resource);
            APIRequester.post(APIConstants.settings.advance, params, resolve);
            return true;
        }

        updateSettings(params) {
            const resolve = (response) => this.storeSettings(response.resource);
            APIRequester.post(APIConstants.settings.collection, params, resolve);
            return true;
        }

        resetSettings() {
            const resolve = (response) => this.storeSettings(response.resource);
            APIRequester.delete(APIConstants.settings.collection, resolve);
            return true;
        }
    }
    this.SettingsActions = alt.createActions(SettingsActions);
})();
