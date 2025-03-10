import { useContext, useRef } from "react";
import { FileContext } from "../context/FileContext";

export const UploadButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleUpload } = useContext(FileContext);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        accept=".pdf"
        ref={fileInputRef}
        onChange={handleUpload}
        className="cursor-pointer"
        style={{ display: "none" }}
        type="file"
      />
      <button
        onClick={handleButtonClick}
        className="px-5 py-2.5 bg-violet-900 text-white font-medium rounded-md cursor-pointer"
      >
        Upload File
      </button>
    </>
  );
};
