import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkUser } from "../middlewares/openRouteAuth.middleware.js";

import {
  toggleSubscription,
  getUserChannelSubscribers,
  getSubscribedChannels,
} from "../controllers/subscription.controller.js";
const router = Router();


router
  .route("/:channelId")
  .patch(verifyJWT, toggleSubscription)
  .get(checkUser, getUserChannelSubscribers);

router.route("/users/:subscriberId").get(checkUser, getSubscribedChannels);

export default router;
