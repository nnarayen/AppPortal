const DATETIME_FORMAT = "ddd MMM DD, h:mm A";
const DATE_FORMAT = "MMM DD, YYYY";
const TIME_FORMAT = "h:mm A";

// Configuration for DateTimePicker gem
Date.parseDate = function(input, format) {
    return moment.utc(input, format).toDate();
};

Date.prototype.dateFormat = function(format) {
    return moment.utc(this).format(format);
};

const formatDateTime = (date) => {
    return moment.utc(date).format(DATETIME_FORMAT);
}
