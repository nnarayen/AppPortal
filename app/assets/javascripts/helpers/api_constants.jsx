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
            member : (id) => `/api/applicants/${id}`,
            upload : (id, type) => `/api/applicants/${id}/${type}`,
            submit : (id) => `/api/applicants/${id}/submit`
        }
    }
}

const APIConstants = new ApiConstants();
