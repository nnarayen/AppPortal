/* Enum for different question types */
const QuestionType = {
    TEXT  : 0,
    INPUT : 1,
    RADIO : 2
};

/* String constants for section titles */
const CategoryTitles = {
    ESSAY         : "Essay Questions",
    QUESTIONNAIRE : "Questionnaire",
    EXTRA         : "Extra Questions",
}

/**
 * @prop type      - type of this section view
 * @prop responses - the responses for this section
 * @prop onChange  - callback function when inputs change
 */
class SectionView extends React.Component {

    _mapResponses = (response) => {
        const typeToComponent = {
            [QuestionType.TEXT]  : TextQuestion,
            [QuestionType.INPUT] : TextQuestion,
            [QuestionType.RADIO] : TextQuestion
        };
        const ApplicationQuestion = typeToComponent[response.question.qtype];
        return (
            <ApplicationQuestion response = {response}
                                 onChange = {this.props.onChange}
                                 key      = {response.id} />
        );
    }

    render() {
        return (
            <div className="section-responses">
                <h2>
                    { CategoryTitles[this.props.type] }
                </h2>
                { this.props.responses.map(this._mapResponses) }
            </div>
        );
    }
}

SectionView.propTypes = {
    responses : React.PropTypes.array.isRequired,
    onChange  : React.PropTypes.func.isRequired
};
