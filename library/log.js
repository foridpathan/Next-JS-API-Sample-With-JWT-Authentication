let moment = require('moment');
let fs = require('fs');
let path = require('path');

function fileWrite(dir = null, fileName = null, data = null) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.appendFile(fileName, data, function(e) {
        return 1;
    });
}

function current_working_directory() {
    return process.cwd();
}

function get_date(date_format = 'YYYY-MM-DD HH:mm:ss') {
    return moment().format(date_format);
}

function logWrite(req = {}, message = '', directory = 'logs', subDirectory = 'sms', prefix = '', isApiLog = false, url = '', requestData = '') {
    let requestPath = url;
    if (!isApiLog) {
        requestPath = `${req.hostname}${req.baseUrl}${req.path}--request data--${requestData}`;
    } else {
        message = requestData;
    }
    let date_format = get_date('YYYY_MM_DD_A');
    let base_path = current_working_directory();
    let fullPath = path.join(base_path, directory, subDirectory, prefix);
    let fileName = `${fullPath}${date_format}.txt`;
    let date = get_date('YYYY-MM-DD HH:mm:ss');
    let logData = date + '|' + requestPath + '|' + message + '\r\n';
    directory = path.join(base_path, directory, subDirectory);

    fileWrite(directory, fileName, logData);
}

module.exports = {
    logWrite
}