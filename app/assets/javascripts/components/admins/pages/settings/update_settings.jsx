class UpdateSettings extends AltComponent {

    componentWillMount() {
        this.setState(SettingsStore.getState());
    }

    componentDidMount() {
        SettingsStore.listen(this._listener);
        SettingsActions.fetchSettings();
    }

    componentWillUnmount() {
        SettingsStore.unlisten(this._listener);
    }

    _attemptAdvance = (e) => {
        SettingsActions.advanceSettings({ stage : this.state.settings.stage + 1 });
    }

    _resetApplication = (e) => {
        SettingsActions.resetSettings();
    }

    render() {
        const formattedDeadline = formatDateTime(this.state.settings.deadline);
        return (
            <div className="settings-container">
                <h3>View and Update Current Settings</h3>
                <div className="advance-portal-container">
                    <label>Current stage:</label>
                    { `${this.state.settings.formatted_stage} stage` }
                </div>
                <button type="button" className="button progress-button"
                        onClick={this._attemptAdvance}>
                    Advance Portal
                </button>
                <UpdateDeadline deadline = {formattedDeadline} />
                <button type="button" className="button reset-button"
                        onClick={this._resetApplication}>
                    Reset Portal
                </button>
            </div>
        );
    }
}
