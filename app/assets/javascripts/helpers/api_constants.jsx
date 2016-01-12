/* String constants for API endpoints */
class ApiConstants {

    get sessions() {
        return {
            sign_in : `/sign_in`,
            sign_up : `/sign_up`
        }
    }

    get applicants() {
        return {
            member     : (id) => `/api/applicants/${id}`,
            submit     : (id) => `/api/applicants/${id}/submit`,
            decide     : (id) => `/api/applicants/${id}/decide`,
            upload     : (id, type) => `/api/applicants/${id}/${type}`,
            comment    : (id) => `/api/applicants/${id}/comment`,
            collection : `/api/applicants`,
        }
    }

    get emails() {
        return {
            member : (type) => `/api/emails/${type}`,
            send   : (type) => `/api/emails/${type}/send`
        }
    }

    get interviews() {
        return {
            member     : (id) => `/api/interviews/${id}`,
            collection : `/api/interviews`
        }
    }
}

const APIConstants = new ApiConstants();
