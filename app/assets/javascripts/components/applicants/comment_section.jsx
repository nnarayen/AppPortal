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
            <h3 className="empty-comments">
                No comments for this applicant!
            </h3>
        );

        return (
            <div className="comment-section">
                <h2>Comment Section</h2>
                { comments.length > 0 ? comments : emptyComments }
                <input onChange={this._onInputChange} name="text"
                    placeholder="Add a comment!" />
                <button type="button" className="comment-button"
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
