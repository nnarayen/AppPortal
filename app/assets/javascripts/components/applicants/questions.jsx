/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 */
class TextQuestion extends React.Component {

    render() {
        return (
            <div className="text-response">
                <label>{this.props.response.question.title}</label>
                <textarea className="response-text" value={this.props.response.answer}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

TextQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func.isRequired
};
