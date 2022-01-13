let moment = require("moment");
const { OTP_VALIDITY, REFRESH_TOKEN_SECRET } = process.env;
const _ = require("lodash");

const jwt = require("jsonwebtoken");


/**
 *generate a 4 digit random number between 1000 and 9999
 **/
function otp_generate() {
    let max = 9999;
    let min = 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function otp_expiration_time_in_sec() {
    return current_time_in_ms() + 5 * 60 * 1000; // otp expire time  5 minutes (in ms)
}

function otp_expiration_time() {
    return moment().add(OTP_VALIDITY, "minutes").format("YYYY-MM-DD HH:mm:ss"); // otp expire time  one hour
}

function token_expiration_time(time = 60000) {
    return moment().add(time, "milliseconds").format("YYYY-MM-DD HH:mm:ss"); // token expire time  one hour
}

function current_working_directory() {
    return process.cwd();
}

function get_date(date_format = "YYYY-MM-DD HH:mm:ss") {
    return moment().format(date_format);
}

function unixTime() {
    return moment.utc().unix();
}

function current_time_in_ms() {
    return Date.now();
}

function HTTPRequesterIP(req) {
    let ip;

    if (req.headers["x-forwarded-for"]) {
        ip = req.headers["x-forwarded-for"].split(",")[0];
    } else if (req.connection && req.connection.remoteAddress) {
        ip = req.connection.remoteAddress;
    } else {
        ip = req.ip;
    }
    console.log("client IP is->" + ip);
    return ip;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function verifyRefreshToken(refreshToken) {
    let ok = false;
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            ok = false;
        } else {
            ok = true;
        }
    });
    //console.log('verify rfs', ok);
    return ok;
}


function is_numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function data_size(data) {
    return data.length;
}

function format_specific_date(datetime = "", date_format = "YYYY-MM-DD HH:mm:ss") {
    return moment(datetime).format(date_format);
}

module.exports = {
    get_date,
    current_time_in_ms,
    getRandomInt,
    unixTime,
    validateEmail,
    token_expiration_time,
    HTTPRequesterIP,
    data_size,
    format_specific_date,
    is_numeric,
    current_working_directory,
    verifyRefreshToken
};