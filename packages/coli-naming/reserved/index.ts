export * from "./reserved-keywords";
import { RESERVED_KEYWORDS } from "./reserved-keywords";

export enum ReservedKeywordPlatforms {
  csharp = "csharp",
  cpp = "cpp",
  python = "python",
  java = "java",
  php = "php",
  react = "react",
  solidjs = "solid-js",
  html = "html",
  typescript = "typescript",
}

export type ReservedKeywordPlatformSelection = ReservedKeywordPlatforms[];

export const ReservedKeywordPlatformPresets = {
  react: [
    ReservedKeywordPlatforms.typescript,
    ReservedKeywordPlatforms.react,
    ReservedKeywordPlatforms.html,
  ],
  solidjs: [
    ReservedKeywordPlatforms.typescript,
    ReservedKeywordPlatforms.solidjs,
    ReservedKeywordPlatforms.html,
  ],
  html: [ReservedKeywordPlatforms.html],
  typescript: [ReservedKeywordPlatforms.typescript],
  universal: [
    ReservedKeywordPlatforms.typescript,
    ReservedKeywordPlatforms.react,
    ReservedKeywordPlatforms.html,
    ReservedKeywordPlatforms.cpp,
    ReservedKeywordPlatforms.csharp,
    ReservedKeywordPlatforms.php,
    ReservedKeywordPlatforms.python,
    ReservedKeywordPlatforms.java,
    // TODO: add dart
  ],
};

export function getReservedKeywords(
  platform: ReservedKeywordPlatformSelection
) {
  const keywords = [];
  platform.map((p) => {
    const platformKeywords = RESERVED_KEYWORDS[p];
    keywords.push(...platformKeywords);
  });

  return keywords;
}
