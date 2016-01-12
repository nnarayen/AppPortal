const DATETIME_FORMAT = "ddd MMM DD, h:mm A";
const DATE_FORMAT = "MMM DD, YYYY";
const TIME_FORMAT = "h:mm A";

// Configuration for DateTimePicker gem
Date.parseDate = function(input, format) {
  return moment(input, format).toDate();
};

Date.prototype.dateFormat = function(format) {
  return moment(this).format(format);
};

const formatDate = (date) => {
    return moment(date).format(DATE_FORMAT);
}
