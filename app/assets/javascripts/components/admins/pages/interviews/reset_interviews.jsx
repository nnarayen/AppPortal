/* TODO(nnarayen): add confirmation modal */
class ResetInterviews extends React.Component {

    _resetInterviews = (e) => {
       InterviewsActions.resetInterviews();
    }

    render() {
        return (
            <div className="reset-container">
                <button type="button" className="button reset-button"
                        onClick={this._resetInterviews}>
                    Reset Interviews
                </button>
            </div>
        );
    }
}
