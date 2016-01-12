/**
 * @prop capacity - capacity per interview slow
 */
class InterviewTable extends AltComponent {

    componentWillMount() {
        this.setState(InterviewsStore.getState());
    }

    componentDidMount() {
        InterviewsStore.listen(this._listener);
        InterviewsActions.fetchInterviews();
    }

    componentWillUnmount() {
        InterviewsStore.unlisten(this._listener);
    }

    _mapInterview = (interview) => {
        return (
            <InterviewRow interview = {interview}
                          key       = {interview.id} />
        );
    }

    _createHeaders = (capacity) => {
        return _.range(capacity).map((index) => {
            return (
                <th key={index}>
                    { `Candidate ${index+1}` }
                </th>
            );
        });
    }

    render() {
        const interviews = this.state.interviews.map(this._mapInterview);
        const headers = this._createHeaders(this.props.capacity);
        return (
            <div className="interview-table">
                <table className="table interview-table">
                    <thead>
                        <th>Timeslot</th>
                        { headers }
                    </thead>
                    <tbody>
                        { interviews }
                    </tbody>
                </table>
            </div>
        );
    }
}

InterviewTable.propTypes = { capacity : React.PropTypes.number.isRequired };
