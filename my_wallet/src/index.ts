import { createApp } from "@deroll/app";

const app = createApp({url: process.env.ROLLUP_HTTP_SERVER_URL || "http://127.0.0.1:5004"});