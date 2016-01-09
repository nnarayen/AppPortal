/* Enum for accepted file types */
const FILE_INPUTS = {
    RESUME  : "application/pdf",
    PICTURE : "image/*"
}

/**
 * @prop applicant - information about this applicant
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
                <div className="resume-upload-container">
                    <label>Resume</label>
                    <input type="file" name={Attributes.RESUME}
                        accept={FILE_INPUTS.RESUME} onChange={this.props.onUpload} />
                    { this._renderDocumentViewer(Attributes.RESUME) }
                </div>
                <div className="picture-upload-container">
                    <label>Picture</label>
                    <input type="file" name={Attributes.PICTURE}
                        accept={FILE_INPUTS.PICTURE} onChange={this.props.onUpload} />
                    { this._renderDocumentViewer(Attributes.PICTURE) }
                </div>
            </div>
        );
    }
}

ApplicantDocuments.propTypes = {
    applicant : React.PropTypes.object.isRequired,
    onUpload  : React.PropTypes.func.isRequired
};
