import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  return Response.json({ msg: "api route" });
};
