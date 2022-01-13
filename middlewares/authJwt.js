const jwt = require("jsonwebtoken");
let { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;
let auth = require("../lang/en/index");

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
            throw new Error('Authentication failed!');
        }

        const verified = jwt.verify(token, ACCESS_TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        return res.status(200).send({
            success: false,
            status_code: auth.AUTH_RESPONSE_DATA.invalid_access_token.code,
            message: auth.AUTH_RESPONSE_DATA.invalid_access_token.msg,
        });
    }
};

const verifyRefreshToken = (req, res, next) => {

    let response = {};
    let { refreshToken } = req.body;

    if (refreshToken === undefined || refreshToken.length <= 1) {

        res.status(200).send({
            success: false,
            status_code: auth.AUTH_RESPONSE_DATA.empty_refresh_token.code,
            message: auth.AUTH_RESPONSE_DATA.empty_refresh_token.msg,
        });
        return;
    }

    if (!refreshToken) {
        return res.status(200).send({
            success: false,
            status_code: auth.AUTH_RESPONSE_DATA.empty_refresh_token.code,
            message: auth.AUTH_RESPONSE_DATA.empty_refresh_token.msg,
        });
    }

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            response.success = false;
            response.status_code = auth.AUTH_RESPONSE_DATA.invalid_refresh_token.code;
            response.message = auth.AUTH_RESPONSE_DATA.invalid_refresh_token.msg;
            return res.status(200).send(response);
        }

        next();
    });
};

const authJwt = {
    verifyToken: verifyToken,
    verifyRefreshToken: verifyRefreshToken
};
module.exports = authJwt;