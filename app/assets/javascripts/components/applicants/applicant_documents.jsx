/* Enum for accepted file types */
const FILE_INPUTS = {
    RESUME  : "application/pdf",
    PICTURE : "image/*"
}

/**
 * @prop onUpload - callback function on successful upload
 */
class ApplicantDocuments extends AltComponent {
    render() {
        return (
            <form encType="multipart/form-data">
                <label>Resume</label>
                <input type="file" name={Attributes.RESUME}
                    accept={FILE_INPUTS.RESUME} onChange={this.props.onUpload} />
                <label>Picture</label>
                <input type="file" name={Attributes.PICTURE}
                    accept={FILE_INPUTS.PICTURE} onChange={this.props.onUpload} />
            </form>
        )
    }
}

ApplicantDocuments.propTypes = { onUpload : React.PropTypes.func.isRequired };
