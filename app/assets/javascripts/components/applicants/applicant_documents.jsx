/* Enum for accepted file types */
const FILE_INPUTS = {
    RESUME  : "application/pdf",
    PICTURE : "image/*"
}

/* Text to display before user has uploaded a file */
const DEFAULT_FILE = "Choose a File";

/**
 * @prop applicant - information about this applicant
 * @prop onUpload  - callback function on file upload
 */
class ApplicantDocuments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resumeSubmit  : false,
            resumeFile    : DEFAULT_FILE,
            pictureSubmit : false,
            pictureFile   : DEFAULT_FILE
        };
    }

    _renderDocumentViewer(attribute) {
        if (this.props.applicant[attribute]) {
            return (
                <a href={this.props.applicant[attribute]} target="_blank">
                    { `View ${attribute}` }
                </a>
            );
        }
    }

    _handleFileSelect = (e) => {
        var resumeSubmitStatus = this.state.resumeSubmit;
        var resumeFileName = this.state.resumeFile || DEFAULT_FILE;
        var pictureSubmitStatus = this.state.pictureSubmit;
        var pictureFileName = this.state.pictureFile || DEFAULT_FILE;

        if (e.target.id == "resume-upload") {
            resumeSubmitStatus = $(e.target)[0].files.length > 0;
            resumeFileName = $(e.target).val().split("\\").pop() || DEFAULT_FILE;
        }
        if (e.target.id == "picture-upload") {
            pictureSubmitStatus = $(e.target)[0].files.length > 0;
            pictureFileName = $(e.target).val().split("\\").pop() || DEFAULT_FILE;
        }

        this.setState({
            resumeSubmit  : resumeSubmitStatus,
            resumeFile    : resumeFileName,
            pictureSubmit : pictureSubmitStatus,
            pictureFile   : pictureFileName
        });

        this.props.onUpload();
    }

    render() {
        const resumeIcon = "fa " + (this.state.resumeSubmit ?  "fa-check-circle-o" : "fa-upload");
        const pictureIcon = "fa " + (this.state.pictureSubmit ?  "fa-check-circle-o" : "fa-upload");

        return (
            <div className={`upload-container scroll-${ScrollTargets.UPLOAD}`}>
                <h2 className="category-title">{CategoryTitles.UPLOAD}</h2>
                <div className="single-upload-container">
                    <label className="upload-label">Resume</label>
                    <input type="file" name={Attributes.RESUME} id="resume-upload"
                        accept={FILE_INPUTS.RESUME} onChange={this._handleFileSelect} />
                    <label className={`button upload-button upload-${this.state.resumeSubmit}`}
                        htmlFor="resume-upload">
                        <span className={resumeIcon} />
                        {this.state.resumeFile}
                    </label>
                    { this._renderDocumentViewer(Attributes.RESUME) }
                </div>
                <div className="single-upload-container">
                    <label className="upload-label">Picture</label>
                    <input type="file" name={Attributes.PICTURE}
                        id="picture-upload" accept={FILE_INPUTS.PICTURE} onChange={this._handleFileSelect} />
                    <label className={`button upload-button upload-${this.state.pictureSubmit}`}
                        htmlFor="picture-upload">
                        <span className={pictureIcon} />
                        {this.state.pictureFile}
                    </label>
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
