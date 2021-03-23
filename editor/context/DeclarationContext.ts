import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface DeclarationInfo {
  id: number;
  type: "ImportDeclaration";
  value: any;
}

export interface DeclarationState {
  declarationList: DeclarationInfo[];
}

interface DeclarationDispatch {
  addDeclaration: (DeclarationInfo: DeclarationInfo) => void;
  removeDeclartion: (id?: number) => void;
  updateDeclartion: (id: number, value: any) => void;
}

const DeclarationContext = createContext({});

export const DeclarationProvider = DeclarationContext.Provider;

export const DeclarationConsumer = DeclarationContext.Consumer;

export const useDeclarationState = () => {
  return useState<DeclarationState>({
    declarationList: [
      {
        id: 0,
        type: "ImportDeclaration",
        value: {
          importDefault: "styled",
          from: "@emotion/styled",
        },
      },
    ],
  });
};

export const useDeclarationContext = (): DeclarationState &
  DeclarationDispatch => {
  const [state, setState] = useContext(DeclarationContext) as [
    DeclarationState,
    Dispatch<SetStateAction<DeclarationState>>
  ];

  function addDeclaration(DeclarationInfo: DeclarationInfo) {
    setState((prev) => ({
      ...prev,
      declarationList: prev.declarationList.concat({
        ...DeclarationInfo,
      }),
    }));
  }

  function removeDeclartion(id?: number) {}

  function updateDeclartion(id: number, value: any) {
    setState((prev) => {
      return {
        ...prev,
        declarationList: prev.declarationList.map((i) => {
          if (i.id === id) {
            i.value = value;
            return i;
          }
          return i;
        }),
      };
    });
  }

  return {
    ...state,
    addDeclaration,
    removeDeclartion,
    updateDeclartion,
  };
};
