/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 * @prop view     - view type for this question
 */
class TextQuestion extends React.Component {

    _charsRemaining(response) {
        return response.question.limit - response.answer.length;
    }

    render() {
        const charsLeft = this._charsRemaining(this.props.response);
        return (
            <div className="text-response">
                <label className="question-label">
                    {this.props.response.question.title}
                </label>
                <label className="char-remaining-label">
                    {`${charsLeft} Characters Remaining`}
                </label>
                <textarea className="response-text"
                    name={this.props.response.id}
                    value={this.props.response.answer}
                    maxLength={this.props.response.question.limit}
                    readOnly={this.props.view == ApplicationView.ADMIN}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

TextQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func,
    view     : React.PropTypes.number.isRequired
};

/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 * @prop view     - view type for this question
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
                    readOnly={this.props.view == ApplicationView.ADMIN}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

InputQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func,
    view     : React.PropTypes.number.isRequired
};

/* Enum for radio options */
const RadioOptions = {
    YES : "1",
    NO  : "0"
}

/**
 * @prop response - response for this question
 * @prop onChange - callback function when inputs change
 * @prop view     - view type for this question
 */
class RadioQuestion extends React.Component {

    render() {
        const disable = this.props.view == ApplicationView.ADMIN;
        const yesId = `${this.props.response.id}-yes`;
        const noId = `${this.props.response.id}-no`;
        return (
            <div className="radio-response">
                <label className="question-label">
                    {this.props.response.question.title}
                </label>
                <div>
                    <input name={this.props.response.id} type="radio" id={yesId}
                        disabled={disable} onChange={this.props.onChange}
                        checked={this.props.response.answer === RadioOptions.YES}
                        value={RadioOptions.YES} />
                    <label htmlFor={yesId}>Yes</label>
                </div>
                <div>
                    <input name={this.props.response.id} type="radio" id={noId}
                        disabled={disable} onChange={this.props.onChange}
                        checked={this.props.response.answer === RadioOptions.NO}
                        value={RadioOptions.NO} />
                    <label htmlFor={noId}>No</label>
                </div>
            </div>
        );
    }
}

RadioQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func,
    view     : React.PropTypes.number.isRequired
};
