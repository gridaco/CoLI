import { atom, selector, ReadOnlySelectorOptions } from "recoil";

export function currentDeclarationAtom<T>(declarationName: string, id: number) {
  return atom<T>({
    key: `${declarationName}-declaration:${id}`,
    default: undefined!,
  });
}
