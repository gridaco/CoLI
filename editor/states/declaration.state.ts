import { atom } from "recoil";

export const currentDeclarationAtom = (declarationName: string) =>
  atom({
    key: `${declarationName}-declaration`,
    default: undefined,
  });
