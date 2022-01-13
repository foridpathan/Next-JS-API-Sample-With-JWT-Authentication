const db = require("../models");
const HomeLayout = db.homeLayout;
import { apiData } from "../lang/en";


// TOP PURCHASES
const findTopPurchases = async(req, res) => {

    let response = {};
    response.message = '';
    try {
        const Layout = await HomeLayout.findAll({
            where: { status: 'active' }
        }).then(res => res).catch(err => err.message);
        response.status = 200;
        response.data = Layout;

    } catch (err) {
        return res.status(200).send({
            success: false,
            status_code: apiData.data_not_found.code,
            message: apiData.data_not_found.msg,
        });
    } finally {
        if (process.env.LOG_ENABLE) {
            logWrite(req, response.message, "logs", "activation", "REQ_RES_", false, "", JSON.stringify(req.body) + "|" + JSON.stringify(response));
        }
        res.send(response);
    }
};

export {
    findTopPurchases
}