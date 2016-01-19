/* Enum for accepted file types */
const FileInputs = {
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
                <a href={this.props.applicant[attribute]} target="_blank"
                    className="upload-view-link">
                    { `View uploaded ${attribute}` }
                </a>
            );
        }
    }

    _handleFileSelect = (e) => {
        const submitStatus = $(e.target)[0].files.length > 0;
        const filename = $(e.target).val().split("\\").pop() || DEFAULT_FILE;
        const attribute = $(e.target).attr("name");
        this.setState({
            [`${attribute}Submit`] : submitStatus,
            [`${attribute}File`]   : filename
        });
        this.props.onUpload(e);
    }

    _generateIcon = (attribute) => {
        return "fa " + ((this.state[`${attribute}Submit`]) ?
            "fa-check-circle-o" : "fa-upload");
    }

    render() {
        return (
            <div className={`upload-container scroll-${ScrollTargets.UPLOAD}`}>
                <h2 className="category-title">{CategoryTitles.UPLOAD}</h2>
                <div className="single-upload-container">
                    <label className="upload-label">Resume</label>
                    <input type="file" name={Attributes.RESUME} id="resume-upload"
                        accept={FileInputs.RESUME} onChange={this._handleFileSelect} />
                    <label className={`button upload-button upload-${this.state.resumeSubmit}`}
                        htmlFor="resume-upload">
                        <span className={this._generateIcon(Attributes.RESUME)} />
                        {this.state.resumeFile}
                    </label>
                    { this._renderDocumentViewer(Attributes.RESUME) }
                </div>
                <div className="single-upload-container">
                    <label className="upload-label">Picture</label>
                    <input type="file" name={Attributes.PICTURE}
                        id="picture-upload" accept={FileInputs.PICTURE} onChange={this._handleFileSelect} />
                    <label className={`button upload-button upload-${this.state.pictureSubmit}`}
                        htmlFor="picture-upload">
                        <span className={this._generateIcon(Attributes.PICTURE)} />
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
