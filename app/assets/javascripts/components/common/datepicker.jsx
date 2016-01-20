/**
 * @prop value         - value to display for this date picker
 * @prop placeholder   - initial placeholder for this date picker
 * @prop onDateChange  - callback function for date picker change
 * @prop onInputChange - callback function for manual input change
 */
class DatePicker extends React.Component {

    componentDidMount() {
        $(React.findDOMNode(this.refs.date)).datetimepicker({
              format: DATETIME_FORMAT,
              formatTime: TIME_FORMAT,
              formatDate: DATE_FORMAT,
              onChangeDateTime: this.props.onDateChange
        });
    }

    render() {
        return (
            <fieldset className="input-container datepicker-input-container">
                <input ref="date" name="date" type="text" placeholder={this.props.placeholder}
                    value={this.props.value} onChange={this.props.onInputChange} />
            </fieldset>
        );
    }

}

DatePicker.propTypes = {
    value         : React.PropTypes.string,
    placeholder   : React.PropTypes.string,
    onDateChange  : React.PropTypes.func.isRequired,
    onInputChange : React.PropTypes.func.isRequired
};
