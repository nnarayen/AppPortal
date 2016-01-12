class CreateInterview extends React.Component {

    _createInterview = (e) => {
        InterviewsActions.createInterview({
            timeslot : $(React.findDOMNode(this.refs.interview)).val()
        });
    }

    componentDidMount() {
        $(React.findDOMNode(this.refs.interview)).datetimepicker({
              format: DATETIME_FORMAT,
              formatTime: TIME_FORMAT,
              formatDate: DATE_FORMAT,
              onChangeDateTime: this._handleDateChange
        });
    }

    render() {
        console.log(this.state);
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
