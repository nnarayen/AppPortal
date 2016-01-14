/* Enum for scroll targets */
const ScrollTargets = {
    PERSONAL : 0,
    ESSAY    : 1,
    QUESTION : 2,
    EXTRA    : 3,
    UPLOAD   : 4
}

/* Text to display depending on application status */
const StatusText = [
    `You have successfully submitted your application!`,
    `The deadline has already passed for this application period.`
];

/*
 * @prop late - whether the deadline has already passed for this application
 */
class ApplicationSidebar extends AltComponent {

    componentWillMount() {
        this.setState(ApplicantStore.getState());
    }

    componentDidMount() {
        ApplicantStore.listen(this._listener);
    }

    componentWillUnmount() {
        ApplicantStore.unlisten(this._listener);
    }

    _smoothScroll = (e) => {
        $.smoothScroll({ scrollTarget : $(e.currentTarget).attr("data-target") });
    }

    _calculateProgress(category) {
        var answered = total = 0;
        _.each(this.state.applicant.responses, (response) => {
            if (response.question.category == QuestionCategory[category]) {
                total = total + 1;
                if (response.answer) { answered = answered + 1 }
            }
        });
        return (total) ? `(${answered} / ${total} completed)` : null;
    }

    _generateLabel = (label) => {
        return (
            <div className="sidebar-label" onClick={this._smoothScroll}
                    data-target={`.scroll-${ScrollTargets[label]}`} key={label}>
                { CategoryTitles[label] }
                <span className="progress">
                    { this._calculateProgress(label) }
                </span>
            </div>
        );
    }

    _text(attribute, index) {
        return (attribute) ? StatusText[index] : null;
    }

    _generateStatusText(applicant) {
        return this._text(applicant.submit, 0) || this._text(this.props.late, 1);
    }

    render() {
        return (
            <div>
                { _.keys(ScrollTargets).map(this._generateLabel) }
                <span className="status-text">
                    { this._generateStatusText(this.state.applicant) }
                </span>
            </div>
        );
    }
}

ApplicationSidebar.propTypes = { late : React.PropTypes.bool.isRequired };
