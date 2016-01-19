/* Helper class to make AJAX requests */
class Requester {

    _errorHandler(xhr, status, error) {
        JSON.parse(xhr.responseText).errors.forEach((error) => {
            toastr.error(error);
        });
    }

    _attemptAjax(endpoint, type, data, extra, onSuccess, onError, onComplete) {
        $.ajax($.extend({}, extra, {
            url: endpoint,
            type: type,
            data: data,
            success: (msg) => {
                if (msg.message) { toastr.success(msg.message) }
                if (msg.to) { window.location.href = msg.to }
                onSuccess(msg);
            },
            error: (xhr, status, error) => {
                if (onError) { onError() }
                this._errorHandler(xhr, status, error);
            },
            complete: (_xhr, _status) => {
                if (onComplete) { onComplete() }
            }
        }));
    }

    post(endpoint, data, success, extraFields, error, ensure) {
        this._attemptAjax(endpoint, 'POST', data, extraFields, success,
            error, ensure);
    }

    getJSON(endpoint, success, data) {
        this._attemptAjax(`${endpoint}.json`, 'GET', data,
            { dataType : 'json' }, success)
    }

    put(endpoint, data, success, extraFields) {
        this._attemptAjax(endpoint, 'PUT', data, extraFields, success);
    }

    delete(endpoint, success, data, extraFields) {
        this._attemptAjax(endpoint, 'DELETE', data, extraFields, success);
    }
}

const APIRequester = new Requester();
