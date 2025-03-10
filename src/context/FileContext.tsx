/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

interface FileContextType {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileContext = createContext<FileContextType>({
  file: null,
  setFile: () => {},
  handleUpload: () => {},
});

export function FileContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.name.split(".").pop() !== "pdf") {
        alert("Please upload a PDF file");
        setFile(null);
        return;
      }
      console.log("Uploading file:", file.name);
      setFile(file);
    }
  };

  return (
    <FileContext.Provider value={{ file, setFile, handleUpload }}>
      {children}
    </FileContext.Provider>
  );
}
