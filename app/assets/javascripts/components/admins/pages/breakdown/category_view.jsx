/**
 * @prop applicants - applicants to display for this category
 * @prop type       - category type
 */
class CategoryView extends React.Component {

    render() {
        const applicants = this.props.applicants.map((applicant) => {
            return (
                <ApplicantCard applicant = { applicant }
                               key       = { applicant.id } />
            );
        });

        return (
            <div className={`category-view category-${this.props.type}`}>
                <div className="col-md-4">
                    <h4 className="breakdown-title">{`${this.props.type} Applicants (${applicants.length})`}</h4>
                    <div className="applicant-cards">
                        { applicants }
                    </div>
                </div>
            </div>
        );
    }
}

CategoryView.propTypes = { applicants : React.PropTypes.array.isRequired };
