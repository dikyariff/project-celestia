import { PrismaClient } from "@prisma/client";

const client = global.db || new PrismaClient();
if (process.env.NODE_ENV === "production") global.db = client;

export default client;