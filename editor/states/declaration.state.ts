import { atom, selector, ReadOnlySelectorOptions } from "recoil";

export function currentDeclarationAtom<T>(declarationName: string, id: number) {
  return atom<T>({
    key: `${declarationName}-declaration:${id}`,
    default: undefined!,
  });
}

export const importDeclarationAtom = atom({
  key: "import-declaration-values",
  default: [],
});

export const functionDeclarationAtom = atom({
  key: "function-declaration-values",
  default: [],
});
