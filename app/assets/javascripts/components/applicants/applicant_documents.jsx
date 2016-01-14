/* Enum for accepted file types */
const FILE_INPUTS = {
    RESUME  : "application/pdf",
    PICTURE : "image/*"
}

/**
 * @prop applicant - information about this applicant
 * @prop disabled  - whether upload should be disabled
 * @prop onUpload  - callback function on file upload
 */
class ApplicantDocuments extends React.Component {

    _renderDocumentViewer(attribute) {
        if (this.props.applicant[attribute]) {
            return (
                <a href={this.props.applicant[attribute]} target="_blank">
                    { `View ${attribute}` }
                </a>
            );
        }
    }

    render() {
        return (
            <div className={`scroll-${ScrollTargets.UPLOAD}`}>
                <h2>{CategoryTitles.UPLOAD}</h2>
                <label>Resume</label>
                <input type="file" name={Attributes.RESUME}
                    disabled={this.props.disabled} accept={FILE_INPUTS.RESUME}
                    onChange={this.props.onUpload} />
                { this._renderDocumentViewer(Attributes.RESUME) }
                <label>Picture</label>
                <input type="file" name={Attributes.PICTURE}
                    disabled={this.props.disabled} accept={FILE_INPUTS.PICTURE}
                    onChange={this.props.onUpload} />
                { this._renderDocumentViewer(Attributes.PICTURE) }
            </div>
        );
    }
}

ApplicantDocuments.propTypes = {
    applicant : React.PropTypes.object.isRequired,
    disabled  : React.PropTypes.bool.isRequired,
    onUpload  : React.PropTypes.func.isRequired
};
