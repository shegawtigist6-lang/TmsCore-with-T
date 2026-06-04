import { Temporal } from "@js-temporal/polyfill";

// 1. Generic ApiResponse መዋቅር መግለጽ (<T> በመጠቀም)
export type ApiResponse<T> =
  | { status: "loading" }
  | { status: "success"; data: T; fetchedAt: Temporal.Instant }
  | { status: "error"; message: string; statusCode: number };

// 2. በ switch-case ሁሉንም 3 ሁኔታዎች የሚይዘው ሬንደረር ፈንክሽን
export function renderResponse<T>(
  response: ApiResponse<T>,
  formatter: (data: T) => string,
): string {
  switch (response.status) {
    case "loading":
      return "Loading...";

    case "success":
      // በ success ጊዜ ፎርማተሩን ከዳታው ጋር ጠርተን ውጤቱን እንመልሳለን
      return formatter(response.data);

    case "error":
      return `Error ${response.statusCode}: ${response.message}`;

    default:
      // Exhaustive check ለደህንነት
      const _exhaustiveCheck: never = response;
      return _exhaustiveCheck;
  }
}