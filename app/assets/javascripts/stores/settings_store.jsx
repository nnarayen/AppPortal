(() => {
    class SettingsStore {
        constructor() {
            this.bindListeners({
                handleStoreSettings: SettingsActions.STORE_SETTINGS
            });
            this.settings = { };
        }

        handleStoreSettings(resource) {
            this.settings = resource;
        }
    }
    this.SettingsStore = alt.createStore(SettingsStore);
})();
