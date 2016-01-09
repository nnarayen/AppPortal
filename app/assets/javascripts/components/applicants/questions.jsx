/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 */
class TextQuestion extends React.Component {

    render() {
        return (
            <div className="text-response">
                <label className="question-label">
                    {this.props.response.question.title}
                </label>
                <textarea className="response-text"
                    name={this.props.response.id}
                    value={this.props.response.answer}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

TextQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func.isRequired
};

/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 */
class InputQuestion extends React.Component {

    render() {
        return (
            <div className="input-response">
                <label className="question-label">
                    {this.props.response.question.title}
                </label>
                <input className="response-text" type="text"
                    name={this.props.response.id}
                    value={this.props.response.answer}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

InputQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func.isRequired
};

/* Enum for radio options */
const RadioOptions = {
    YES : "1",
    NO  : "0"
}

/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 */
class RadioQuestion extends React.Component {

    render() {
        const yesId = this.props.response.id + "-yes";
        const noId = this.props.response.id + "-no"
        return (
            <div className="radio-response">
                <label className="question-label">
                    {this.props.response.question.title}
                </label>
                <div>
                    <input name={this.props.response.id} type="radio" id={yesId}
                        onChange={this.props.onChange} value={RadioOptions.YES}
                        checked={this.props.response.answer === RadioOptions.YES} />
                    <label htmlFor={yesId}>Yes</label>
                </div>
                <div>
                    <input name={this.props.response.id} type="radio" id={noId}
                        onChange={this.props.onChange} value={RadioOptions.NO}
                        checked={this.props.response.answer === RadioOptions.NO} />
                    <label htmlFor={noId}>No</label>
                </div>
            </div>
        );
    }
}

RadioQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func.isRequired
};
