import { type NextRequest, NextResponse } from "next/server";
import { contents } from "@/constants/dramaContents";
import type { IComicRankApiSuccessResponse } from "@/types/comicRankItemType";

const NUMBER_REGEXP = /^[0-9]+$/;

export async function GET(request: NextRequest) {
  console.log("? : ");
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  const isNum = page ? NUMBER_REGEXP.test(page) : false;
  const data = contents[isNum ? Number(page) : 0];
  return NextResponse.json({ data });
}
