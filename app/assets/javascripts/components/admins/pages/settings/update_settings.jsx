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

	_attemptProgress = (e) => {
		SettingsActions.advanceSettings({ stage : this.state.settings.stage + 1 });
	}

	_resetApplication = (e) => {
		SettingsActions.resetSettings();
	}

	render() {
		return (
			<div className="stage-container">
				<h3>View and Update Current Settings</h3>
				<div className="progress-application">
					<label>Current stage:</label>
					{ `${this.state.settings.formatted_stage} stage` }
				</div>
                <button type="button" className="progress-button"
                        onClick={this._attemptProgress}>
                    Advance Application
                </button>
                <button type="button" className="reset-button"
                        onClick={this._resetApplication}>
                    Reset Portal
                </button>
			</div>
		);
	}
}
