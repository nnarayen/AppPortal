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
            member    : (id) => `/api/applicants/${id}`,
            responses : (id) => `/api/applicants/${id}/responses`,
            upload    : (id, type) => `/api/applicants/${id}/${type}`
        }
    }
}

const APIConstants = new ApiConstants();
