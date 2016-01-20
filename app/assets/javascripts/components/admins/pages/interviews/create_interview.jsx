class CreateInterview extends AltComponent {

    constructor(props) {
        super(props);
        this.state = { };
    }

    _createInterview = (e) => {
        InterviewsActions.createInterview({ timeslot : this.state.date });
    }

    render() {
        return (
            <div className="create-interview">
                <DatePicker value         = {this.state.date}
                            placeholder   = {"Schedule Interview"}
                            onDateChange  = {this._onDateChange}
                            onInputChange = {this._onInputChange} />
                <button type="button" onClick={this._createInterview}
                        className="button submit-button">
                    Create Interview
                </button>
            </div>
        );
    }
}
