let data = {
    empty_access_token: {
        code: 6001,
        msg: "API TOKEN IS EMPTY",
    },
    invalid_access_token: {
        code: 6002,
        msg: "INVALID API TOKEN"
    },
    empty_source: {
        code: 6005,
        msg: "EMPTY REQUEST SOURCE!",
    },
    invalid_source: {
        code: 6006,
        msg: "INVALID REQUEST SOURCE! PLEASE WHITELIST YOU IP FROM ADMIN",
    },
    empty_refresh_token: {
        code: 6007,
        msg: "REFRESH TOKEN IS EMPTY",
    },
    invalid_refresh_token: {
        code: 6008,
        msg: "INVALID REFRESH API TOKEN"
    },
    empty_store_id: {
        code: 6009,
        msg: "STORE ID IS EMPTY",
    },
    invalid_store_id: {
        code: 6010,
        msg: "INVALID STORE ID"
    },
    empty_store_secret: {
        code: 6011,
        msg: "STORE SECRET IS EMPTY",
    },
    invalid_store_secret: {
        code: 6012,
        msg: "INVALID STORE SECRET"
    },
    empty_grant_type: {
        code: 6003,
        msg: "GRANT TYPE IS EMPTY",
    },
    invalid_grant_type: {
        code: 6004,
        msg: "INVALID GRANT TYPE"
    },
    empty_username: {
        code: 6013,
        msg: "USERNAME IS EMPTY",
    },
    invalid_username: {
        code: 6014,
        msg: "INVALID USERNAME"
    },
    empty_password: {
        code: 6015,
        msg: "PASSWORD IS EMPTY",
    },
    invalid_password: {
        code: 6016,
        msg: "INVALID PASSWORD"
    },
    empty_email: {
        code: 6017,
        msg: "EMAIL IS EMPTY",
    },
    invalid_email: {
        code: 6018,
        msg: "INVALID EMAIL"
    },
    invalid_credential: {
        code: 6019,
        msg: "INVALID CREDENTIAL GIVEN! PLEASE CONTACT WITH ADMIN"
    },
    invalid_store: {
        code: 6020,
        msg: "INVALID STORE"
    },
    invalid_store_id: {
        code: 6020,
        msg: "INVALID STORE ID! PLEASE CONTACT WITH ADMIN"
    },
};


const withe_listed_ip = [
    "::ffff:172.16.67.37",
    "103.147.163.54",
    "172.16.103.105",
    "103.23.31.27",
    "52.74.0.63",
    "13.250.151.165",
    "54.169.181.158",
    "13.228.92.158",
    "54.179.165.97",
    "104.152.108.7",

    "127.0.0.1",
    "::1",
    "::ffff:127.0.0.1",
    "172.18.208.1",
    "172.17.64.1",
    "172.16.34.107",
];

module.exports = {
    AUTH_RESPONSE_DATA: data,
    WITHE_LISTED_IP: withe_listed_ip
}