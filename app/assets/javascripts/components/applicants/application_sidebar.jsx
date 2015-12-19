/* Enum for scroll targets */
const ScrollTargets = {
    PERSONAL : 0,
    ESSAY    : 1,
    QUESTION : 2,
    EXTRA    : 3,
    UPLOAD   : 4
}

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
        const categoryResponses = _.filter(this.state.applicant.responses, (response) => {
            return response.question.category == QuestionCategory[category];
        });
        if (categoryResponses.length) {
            const answered = _.filter(categoryResponses, (response) => {
                return response.answer;
            }).length;
            return `(${answered} / ${categoryResponses.length} completed)`;
        }
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
