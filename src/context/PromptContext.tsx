/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

interface PromptResponseContextType {
  propmt: string | null;
  setPrompt: React.Dispatch<React.SetStateAction<string | null>>;
}

export const PromptResponseContext = createContext<PromptResponseContextType>({
  propmt: null,
  setPrompt: () => {},
});

export function PromptResponseContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [propmt, setPrompt] = useState<string | null>(null);

  return (
    <PromptResponseContext.Provider value={{ propmt, setPrompt }}>
      {children}
    </PromptResponseContext.Provider>
  );
}
