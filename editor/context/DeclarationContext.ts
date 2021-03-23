import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface DeclarationInfo {
  id?: number;
  type: "ImportDeclaration";
  value: any;
}

export interface DeclarationState {
  declarationList: DeclarationInfo[];
}

interface DeclarationDispatch {
  addDeclaration: (DeclarationInfo: DeclarationInfo) => void;
  removeDeclartion: (id?: number) => void;
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

  return {
    ...state,
    addDeclaration,
    removeDeclartion,
  };
};
