/**
 * @prop comment - an individual comment to display
 */
class Comment extends React.Component {

    render() {
        return (
            <div className="comment">
                <label className="comment-name">{ `${this.props.comment.name}: ` }</label>
                <span>{ this.props.comment.text }</span>
            </div>
        );
    }
}

Comment.propTypes = { comment : React.PropTypes.object.isRequired }
