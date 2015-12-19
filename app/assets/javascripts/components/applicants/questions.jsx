/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 */
class TextQuestion extends React.Component {

    render() {
        return (
            <div className="text-response">
                <label>{this.props.response.question.title}</label>
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
                <label>{this.props.response.question.title}</label>
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
        return (
            <div className="radio-response">
                <label>{this.props.response.question.title}</label>
                <input name={this.props.response.id} type="radio"
                    onChange={this.props.onChange} value={RadioOptions.YES}
                    checked={this.props.response.answer === RadioOptions.YES} />
                <label>Yes</label>
                <input name={this.props.response.id} type="radio"
                    onChange={this.props.onChange} value={RadioOptions.NO}
                    checked={this.props.response.answer === RadioOptions.NO} />
                <label>No</label>
            </div>
        );
    }
}

RadioQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func.isRequired
};
