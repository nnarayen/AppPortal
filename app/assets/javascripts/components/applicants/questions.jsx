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
                <label>{`${charsLeft} Characters Remaining`}</label>
                <textarea className="response-text"
                    name={this.props.response.id}
                    value={this.props.response.answer}
                    maxLength={this.props.response.limit}
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const disable = this.props.view == ApplicationView.ADMIN;
        return (
            <div className="radio-response">
                <label>{this.props.response.question.title}</label>
                <input name={this.props.response.id} type="radio" disabled={disable}
                    onChange={this.props.onChange} value={RadioOptions.YES}
                    checked={this.props.response.answer === RadioOptions.YES} />
                <label>Yes</label>
                <input name={this.props.response.id} type="radio" disabled={disable}
                    onChange={this.props.onChange} value={RadioOptions.NO}
                    checked={this.props.response.answer === RadioOptions.NO} />
                <label>No</label>
=======
        const yesId = this.props.response.id + "-yes";
        const noId = this.props.response.id + "-no"
        return (
            <div className="radio-response">
=======
        const yesId = this.props.response.id + "-yes";
        const noId = this.props.response.id + "-no"
        return (
            <div className="radio-response">
>>>>>>> styled homepage, application page
=======
        const yesId = this.props.response.id + "-yes";
        const noId = this.props.response.id + "-no"
        return (
            <div className="radio-response">
>>>>>>> 5f16e2c1800f7b1a6985112aa99b4ce4d62a6d0f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> styled homepage, application page
=======
>>>>>>> styled homepage, application page
=======
>>>>>>> 5f16e2c1800f7b1a6985112aa99b4ce4d62a6d0f
            </div>
        );
    }
}

RadioQuestion.propTypes = {
    response : React.PropTypes.object.isRequired,
    onChange : React.PropTypes.func,
    view     : React.PropTypes.number.isRequired
};
