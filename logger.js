var url = 'http://myloger.io/log';

function log(message) {
    // send an HTTP request
    console.log(message);
}

module.exports.log = log;
