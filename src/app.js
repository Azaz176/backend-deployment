import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: [
      "https://frontend-delta-lilac-48.vercel.app",
      "http://localhost:5173",
    ]
    ,
    credentials: true,
  })
);
// origin: process.env.CORS_ORIGIN,

app.use(express.json({ limit: "99mb" }));
app.use(express.urlencoded({ extended: true, limit: "99mb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

//import Routes
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import aboutRouter from "./routes/about.routes.js";

app.get("/", (req, res) => res.send("Backend of YouTube+Twitter by Azaz"));

app.use("/api/v1/healthcheck", healthcheckRouter);

app.use("/api/v1/users", userRouter);

app.use("/api/v1/videos", videoRouter);

app.use("/api/v1/tweets", tweetRouter);

app.use("/api/v1/subscription", subscriptionRouter);

app.use("/api/v1/playlist", playlistRouter);

app.use("/api/v1/comment", commentRouter);

app.use("/api/v1/like", likeRouter);

app.use("/api/v1/dashboard", dashboardRouter);

app.use("/api/v1/about/user/", aboutRouter);

export { app };
