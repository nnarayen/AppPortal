/* Template component to handle Flux data flow */
class AltComponent extends React.Component {

    _listener = (state) => {
        this.setState(state);
    }

    _onInputChange = (e) => {
        this.setState({ [$(e.target).attr("name")] : $(e.target).val() });
    }

    _onChange = (attribute) => {
        const inputChange = (e) => {
            const newState = React.addons.update(this.state[attribute], {
                [$(e.target).attr("name")]: { $set: $(e.target).val() }
            });
            this.setState({ [attribute] : newState });
        }
        return inputChange;
    }

    _onDateChange = (date) => {
        this.setState({ date : formatDateTime(date) });
    }
}
