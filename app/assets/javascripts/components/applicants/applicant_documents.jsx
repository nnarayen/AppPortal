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
            resumeFile  : DEFAULT_FILE,
            pictureFile : DEFAULT_FILE
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
        // Disable roster upload if no file selected
        console.log(e.target.id);
        this.setState({

            resumeFile  : $(e.target).val().split("\\").pop() || DEFAULT_FILE,
            pictureFile : $(e.target).val().split("\\").pop() || DEFAULT_FILE
        });
        this.props.onUpload();
    }

    render() {
        return (
            <div className={`upload-container scroll-${ScrollTargets.UPLOAD}`}>
                <h2>{CategoryTitles.UPLOAD}</h2>
                <div className="single-upload-container">
                    <label>Resume</label>
                    <input type="file" name={Attributes.RESUME} id="resume-upload"
                        accept={FILE_INPUTS.RESUME} onChange={this._handleFileSelect} />
                    <label htmlFor="resume-upload">
                        {this.state.resumeFile}
                    </label>
                    { this._renderDocumentViewer(Attributes.RESUME) }
                </div>
                <div className="single-upload-container">
                    <label>Picture</label>
                    <input type="file" name={Attributes.PICTURE}
                        id="picture-upload" accept={FILE_INPUTS.PICTURE} onChange={this._handleFileSelect} />
                    <label htmlFor="picture-upload">
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
