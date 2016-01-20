/**
 * @prop data         - current input to render
 * @prop editable     - true if fields are editable
 * @prop handleChange - callback function when form inputs change
 * @prop toggleEdit   - callback function to toggle editing
 */
class EditableInput extends React.Component {

    _renderInput() {
        if (this.props.editable) {
            return (
                <input name="timeslot" type="text" defaultValue={this.props.data}
                    onChange={this.props.handleChange} />
            );
        } else {
            return (
                <div onClick={this.props.toggleEdit}>
                   { this.props.data }
                </div>
            );
        }
    }

    render() {
        return (
            <fieldset className={`input-container inline-input-container
                    timeslot-edit edit-${this.props.editable}`}>
                <div className="input-box-container">
                    { this._renderInput() }
                </div>
            </fieldset>
        );
    }
}

EditableInput.propTypes = {
    data         : React.PropTypes.string.isRequired,
    editable     : React.PropTypes.bool.isRequired,
    handleChange : React.PropTypes.func.isRequired,
    toggleEdit   : React.PropTypes.func.isRequired
};
