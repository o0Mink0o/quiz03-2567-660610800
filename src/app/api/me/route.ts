import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Sorawit Yokthlemthae",
    studentId: "660610800",
  });
};
