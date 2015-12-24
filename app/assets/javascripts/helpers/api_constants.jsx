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
            collection : `/api/applicants`,
        }
    }
}

const APIConstants = new ApiConstants();
