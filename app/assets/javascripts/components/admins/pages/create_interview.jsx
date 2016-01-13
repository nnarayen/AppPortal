class CreateInterview extends React.Component {

    _createInterview = (e) => {
        // Hacky workaround since datepicker gem overrides manual input
        const timeslot = $(React.findDOMNode(this.refs.interview)).val();
        InterviewsActions.createInterview({ timeslot : timeslot });
    }

    componentDidMount() {
        $(React.findDOMNode(this.refs.interview)).datetimepicker({
              format: DATETIME_FORMAT,
              formatTime: TIME_FORMAT,
              formatDate: DATE_FORMAT
        });
    }

    render() {
        return (
            <div className="create-interview">
                <input ref="interview" placeholder="Schedule Interview" />
                <button type="button" onClick={this._createInterview}>
                    Create Interview
                </button>
            </div>
        );
    }
}
