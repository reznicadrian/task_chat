import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { channelRouter } from "./routes/channelRoutes.js";
import { indexRouter } from "./routes/index.js";
import { messageRouter } from "./routes/messageRoutes.js";
import { usersRouter } from "./routes/users.js";
import * as models from "./models/models.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/channels", channelRouter);
app.use("/api/messages", messageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export { app };
