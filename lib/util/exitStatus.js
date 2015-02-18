var statuses = {
  normal: { code: 0, message: '' },
  EGENERIC: { code: 1, message: 'Unknown error' },
  EUNKNOWNCMD: { code: 2, message: 'Unknown command' },
  EINVFORMAT: { code: 3, message: 'Wrong command parameters' }
};

var exitStatus = {
  code: function (key) {
    return (statuses[key] || {}).code;
  },

  message: function (key) {
    return (statuses[key] || {}).message;
  }
};

module.exports = exitStatus;
