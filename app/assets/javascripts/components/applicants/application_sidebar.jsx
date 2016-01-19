/* Enum for scroll targets */
const ScrollTargets = {
    PERSONAL : 0,
    ESSAY    : 1,
    QUESTION : 2,
    EXTRA    : 3,
    UPLOAD   : 4
}

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
        $.smoothScroll({
            scrollTarget : $(e.currentTarget).attr("data-target"),
            offset : -60
        });
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

    render() {
        return (
            <div>
                { _.keys(ScrollTargets).map(this._generateLabel) }
            </div>
        );
    }
}
