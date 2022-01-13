let auth = require("../lang/en/index");
let { HTTPRequesterIP } = require("../library/helper");

const verifyRequestSource = (req, res, next) => {
    const userIP = HTTPRequesterIP(req);
    if (!auth.WITHE_LISTED_IP.includes(userIP)) {
        res.status(200).send({
            success: false,
            status_code: auth.AUTH_RESPONSE_DATA.invalid_source.code,
            message: auth.AUTH_RESPONSE_DATA.invalid_source.msg,
        });
        return;
    }
    if (req.body === '') req.body = {}
    req.body.ip = userIP;
    console.log('verifyRequestSource Passed');
    next();
};

const get_ip = (req, res, next) => {
    req.body.user_ip = HTTPRequesterIP(req);
    next();
};

const verifySource = {
    verifyRequestSource: verifyRequestSource,
    get_ip
};
module.exports = verifySource;