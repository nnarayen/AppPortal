/* String constants for API endpoints */
class ApiConstants {

    get sessions() {
        return {
            sign_in : `/sign_in`,
            sign_up : `/sign_up`
        }
    }

    get passwords() {
        return {
            reset      : `/api/passwords/reset`,
            send_reset : `/api/passwords/send_reset`
        }
    }

    get applicants() {
        return {
            member     : (id) => `/api/applicants/${id}`,
            submit     : (id) => `/api/applicants/${id}/submit`,
            decide     : (id) => `/api/applicants/${id}/decide`,
            upload     : (id, type) => `/api/applicants/${id}/${type}`,
            comment    : (id) => `/api/applicants/${id}/comment`,
            schedule   : (id) => `/api/applicants/${id}/schedule`,
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

    get settings() {
        return {
            collection : `/api/settings`,
            advance    : `/api/settings/advance`
        }
    }
}

const APIConstants = new ApiConstants();
