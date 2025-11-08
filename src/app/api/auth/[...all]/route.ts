
import { toNextJsHandler } from "better-auth/next-js";
// @ts-ignore
import { auth } from "@/lib/auth";

export const { POST, GET } = toNextJsHandler(auth);