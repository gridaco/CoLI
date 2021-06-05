import {
  CasedObjectName,
  NameCase,
  NamingResult,
  NamingSeedLike,
  VariableNameCase,
} from "./types";

/**
 * automatically names with givven seed input
 * @param seed
 * @returns
 */
export function nameit(
  seed: NamingSeedLike,
  preferences: {
    case: NameCase;
  }
): NamingResult {
  if (!seed) {
    return {
      name: pureRandomName(),
      candidates: [1, 2, 3].map(pureRandomName), // provide default 3 more random names
      reason: "no seed was provided, using a random generated name instead.",
      warn: true,
    };
  }
  // single string seed
  if (typeof seed == "string") {
    const tokens = tokenizeSeeds(seed);
    const objectNames = buildObjectName(...tokens);
    return {
      name: objectNames[preferences.case],
      object: objectNames,
      reason: "normal single string input converted as name",
      warn: false,
    };
  }
  // NamingSeed seed
  else if (typeof seed == "object" && "name" in seed) {
    //
  } else {
    throw `invalid seed data ${JSON.stringify(
      seed
    )} cannot be used as seed. allowed seed types are - \`type NamingSeedLike = string | NamingSeed\``;
  }
}

export function pureRandomName(): string {
  return `_${randomHash()}`;
}

export function randomHash(length?: number): string {
  const random = `${Math.random()}`.replace(".", "");
  return random.slice(0, Math.min(random.length, length ?? random.length) - 1);
}

/**
 * accepts number and alphabets
 * e.g. in - "there,-- once_was 12girls that i UsedToKnow."
 * out - `["there", "once", "was", "12", "girls", "that", "i", "used", "to", "know"]`
 * @param names
 * @returns
 */
export function tokenizeSeeds(...names: string[]): string[] {
  if (names.length == 0) {
    throw "cannot tokenize empty name seeds";
  }
  const tokens = names
    .flatMap((name) => {
      const alphabet_and_numbers = name.match(
        // https://regexr.com/4inb8
        /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
      );
      return alphabet_and_numbers;
    })
    .map((t) => t?.toLowerCase());

  if (tokens.length == 0) {
    return tokenizeSeeds(pureRandomName());
  }

  // if first token is a number, add _ underscore as the first token.
  if (!isNaN(tokens[0] as any)) {
    tokens.unshift("_");
  }

  return tokens;
}

export function nameVariable(
  seed: NamingSeedLike,
  preferences: {
    case: VariableNameCase;
  }
): NamingResult {
  return nameit(seed, {
    case: preferences.case,
  });
}

/**
 * input: only validated tokens. trhoug `tokenizeInput`
 * @param tokens
 */
export function buildObjectName(...tokens: string[]): CasedObjectName {
  if (tokens.length == 0) {
    // not handlable input givven
    return <CasedObjectName>{
      flat: "$___empty",
      snake: "$___empty",
      _snake: "$___empty",
      camel: "$___empty",
      _camel: "$___empty",
      pascal: "$___empty",
      _pascal: "$___empty",
      kebab: "$___empty",
      upper: "$___empty",
      upper_snake: "$___empty",
      _upper_snake: "$___empty",
    };
  }

  if (tokens[0] === "_") {
    const _no_underscore_tokens = tokens.slice(1, tokens.length);
    const flat = tokens.join("");
    const snake_case = `_${_no_underscore_tokens.join("_")}`;
    const upper_snake_case = snake_case.toUpperCase();
    const camelCase = tokens
      .map((substr, i) => {
        if (i == 0) {
          return substr?.toLowerCase();
        }
        return substr?.charAt(0).toUpperCase() + substr?.slice(1);
      })
      .join("");
    const PascalCase = tokens
      .map((substr) => substr.charAt(0).toUpperCase() + substr.slice(1))
      .join("");

    const kebab__case = _no_underscore_tokens.join("-"); // kebab case is not a accepted variable name. though, we are returning this for dynamic advanced usage.

    const _snake_case = `${snake_case}`;
    const _upper_snake_case = _snake_case.toUpperCase();
    const _camelCase = `${camelCase}`;
    const _PascalCase = `${PascalCase}`;
    const upper = flat.toUpperCase();

    return <CasedObjectName>{
      flat: flat,
      snake: snake_case,
      _snake: _snake_case,
      camel: camelCase,
      _camel: _camelCase,
      pascal: PascalCase,
      _pascal: _PascalCase,
      kebab: kebab__case,
      upper: upper,
      upper_snake: upper_snake_case,
      _upper_snake: _upper_snake_case,
    };
  } else {
    const flat = tokens.join("");
    const snake_case = tokens.join("_");
    const upper_snake_case = snake_case.toUpperCase();
    const camelCase = tokens
      .map((substr, i) => {
        if (i == 0) {
          return substr?.toLowerCase();
        }
        return substr?.charAt(0).toUpperCase() + substr?.slice(1);
      })
      .join("");
    const PascalCase = tokens
      .map((substr) => substr?.charAt(0).toUpperCase() + substr?.slice(1))
      .join("");
    const kebab__case = tokens.join("-"); // kebab case is not a accepted variable name. though, we are returning this for dynamic advanced usage.
    const _snake_case = `_${snake_case}`;
    const _upper_snake_case = _snake_case.toUpperCase();
    const _camelCase = `_${camelCase}`;
    const _PascalCase = `_${PascalCase}`;
    const upper = flat.toUpperCase();

    return <CasedObjectName>{
      flat: flat,
      snake: snake_case,
      _snake: _snake_case,
      camel: camelCase,
      _camel: _camelCase,
      pascal: PascalCase,
      _pascal: _PascalCase,
      kebab: kebab__case,
      upper: upper,
      upper_snake: upper_snake_case,
      _upper_snake: _upper_snake_case,
    };
  }
}
