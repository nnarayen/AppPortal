/**
 * Component to handle barebones form submissions
 */
class DefaultForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    _handleKeydown = (e) => { if (e.which == 13) { this._attemptSubmit() } }

    _handleChange = (e) => {
        this.setState({ [$(e.target).attr("name")] : $(e.target).val() });
    }

    _focusInputField = () => {
        $(React.findDOMNode(this.refs.focus)).focus();
    }

    _formFields() {
        // Necessary because bootstrap-select does not fire onChange events
        const extraFields = { };
        $('.selectpicker').each((index, element) => {
            extraFields[$(element).attr("name")] = $(element).val();
        });
        return $.extend({}, this.state, extraFields);
    }

    _attemptAction(endpoint, data, success = () => {}) {
        APIRequester.post(endpoint, data, success);
    }
}
