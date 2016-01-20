/**
 * @prop data         - current input to render
 * @prop editable     - true if fields are editable
 * @prop handleChange - callback function when form inputs change
 */
class EditableInput extends React.Component {

    _renderInput() {
        if (this.props.editable) {
            return (
                <input name="timeslot" type="text" defaultValue={this.props.data}
                    onChange={this.props.handleChange} />
            );
        } else {
            return this.props.data;
        }
    }

    _toggleEdit = () => {
      if (!this.props.editable) {
        this.props.toggleEdit();
      }
    }

    render() {
        const edit = `edit-${this.props.editable}`;
        return (
            <fieldset className={`input-container inline-input-container timeslot-edit ${edit}`}
                onClick={this._toggleEdit}>
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
    handleChange : React.PropTypes.func.isRequired
};
