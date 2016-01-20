/**
 * @prop comments     - comments for this applicant
 * @prop applicant_id - id for this applicant
 */
class CommentSection extends AltComponent {

    _attemptComment = (e) => {
        ApplicantActions.changeApplicant(APIConstants.applicants.comment(
            this.props.applicant_id), this.state);
    }

    render() {
        const comments = this.props.comments.map((comment) => {
            return (
                <Comment comment = {comment}
                         key     = {comment.id} />
            );
        });

        const emptyComments = (
            <p className="empty-comments">
                No comments for this applicant. Add one below!
            </p>
        );

        return (
            <div className="comment-section">
                <h2>Comment Section</h2>
                { comments.length > 0 ? comments : emptyComments }
                <div className="input-container comment-input-container">
                    <input onChange={this._onInputChange} name="text"
                        type="text" placeholder="Add a comment!" />
                </div>
                <button type="button" className="button submit-button"
                        onClick={this._attemptComment}>
                    Post Comment
                </button>
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments     : React.PropTypes.array.isRequired,
    applicant_id : React.PropTypes.number
}
