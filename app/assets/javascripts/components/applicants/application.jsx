/* Enum for different question categories */
const QuestionCategory = {
    ESSAY    : 0,
    QUESTION : 1,
    EXTRA    : 2
};

/**
 * @prop responses - the responses for this application
 * @prop onChange  - callback function when inputs change
 * @prop view      - view type for this application
 */
class Application extends React.Component {

    _filterResponses(category) {
        return _.filter(this.props.responses, (response) => {
            return response.question.category == QuestionCategory[category];
        });
    }

    render() {
        const sections = _.keys(QuestionCategory).map((category) => {
            return (
                <SectionView responses = {this._filterResponses(category)}
                             onChange  = {this.props.onChange}
                             view      = {this.props.view}
                             type      = {category}
                             key       = {category} />
            );
        });
        return (
            <div className="sections-container">
                { sections }
            </div>
        );
    }
}

Application.propTypes = {
    responses : React.PropTypes.array.isRequired,
    onChange  : React.PropTypes.func,
    view      : React.PropTypes.number.isRequired
};
