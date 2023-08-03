/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
// eslint-disable-next-line no-undef
const { logger } = require("./logger");

const port = 3000;

//addTransport(new winston.transports.File({ filename: "file.log" }));
logger.error("This is level 0 ; error");
logger.warn("This is level 1 ; warn");
logger.info("This is level 2 ; info");
logger.http("This is level 3 ; http ");
logger.verbose("This is level 4 ; verbose");
logger.debug("This is level 5 ; debug");
logger.silly("This is level 6 ; silly");


app.listen(port, () => {
  logger.info(`Hey !!!!!!!!!!!! :) Server is running on port ${port}`);
});


