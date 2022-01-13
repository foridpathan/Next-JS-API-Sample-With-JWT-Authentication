import nc from "next-connect";
import { findTopPurchases } from "../../../controllers/public.controller";
import { verifyToken } from "../../../middlewares/authJwt";
import { verifyRequestSource } from "../../../middlewares/verifySource";

const handler = nc().use(verifyRequestSource, verifyToken)

handler.get(findTopPurchases)

export default handler;