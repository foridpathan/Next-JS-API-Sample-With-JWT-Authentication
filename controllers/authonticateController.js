const { STORE_ID, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_LIFE, ACCESS_TOKEN_LIFE } = process.env;
const jwt = require("jsonwebtoken");
const ms = require("ms");
let auth = require("../lang/en/index");

let accessTokenExpTime = ms(REFRESH_TOKEN_LIFE);
let refreshTokenExpTime = ms(ACCESS_TOKEN_LIFE);

exports.getPublicTocken = async(req, res) => {
    let { store_id } = req.body,
        response = {};
    try {
        if (store_id !== STORE_ID) {
            console.log(store_id)
            response.statusCode = auth.invalid_store_id.code;
            response.msg = auth.invalid_store_id.msg;
            return res.send(response);
        }

        let accessToken = jwt.sign({ id: store_id }, ACCESS_TOKEN_SECRET, {
            expiresIn: accessTokenExpTime
        });
        let refreshToken = jwt.sign({ id: store_id }, ACCESS_TOKEN_SECRET, {
            expiresIn: refreshTokenExpTime
        });

        response.success = true;
        response.statusCode = 200;
        response.token = accessToken;
        response.refreshToken = refreshToken;
        res.send(response);

    } catch (err) {
        console.log("error object", error);
        response.statusCode = 500;
        response.msg = error.msg;
        res.send(response);
    }
};