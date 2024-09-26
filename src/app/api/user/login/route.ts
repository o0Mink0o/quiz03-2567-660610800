import jwt from "jsonwebtoken";

import { Database, DB, readDB } from "@lib/DB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { username, password } = body;
  readDB();

  const user = (<Database>DB).users.find(
    (user) => user.username === username && user.password === password
  );
if (!user) {
  return NextResponse.json(
    {
      ok: false,
      message: "Username or Password is incorrect",
    },
    { status: 400 }
  );
}
  const token = "Replace this with token creation";

  return NextResponse.json({ ok: true, token });
};
