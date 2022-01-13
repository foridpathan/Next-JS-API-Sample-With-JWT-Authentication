import nc from "next-connect";
import { getPublicTocken } from "../../../controllers/authonticateController";
import { verifyRequestSource } from "../../../middlewares/verifySource";

const handler = nc().use(verifyRequestSource)

handler.post(getPublicTocken)

export default handler;