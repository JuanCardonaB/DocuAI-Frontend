import { useContext, useState, useRef, useEffect } from "react";
import { UploadButton } from "../components/UploadButton";
import { ThemeContext } from "../context/ThemeContext";
import { FileContext } from "../context/FileContext";
import "../customStyles/customScrollbar.css";

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { file } = useContext(FileContext);
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <main className="w-[70%] h-screen justify-center items-center flex flex-col">
      <div className="flex flex-col justify-center items-center gap-2.5 mb-10">
        <h1
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-7xl font-bold`}
        >
          DocuAI
        </h1>
        {!file && (
          <p
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } text-center w-[600px]`}
          >
            Streamline your document management with DocuAI – extract text,
            summarize, and classify documents instantly with AI. Try it now and
            save time!
          </p>
        )}
      </div>
      {!file && <UploadButton />}
      {file && (
        <div className="flex flex-col gap-2.5 items-end bg-[#333] rounded-md p-5">
          <textarea
            placeholder="Make a question..."
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=" px-2.5 py-2 text-white focus:outline-none w-[600px] resize-none custom-scrollbar"
            rows={1}
            style={{ minHeight: "40px", maxHeight: "400px" }}
          />
          <button className="cursor-pointer">
            <div>
              <img src="send.svg" alt="arrow-right" className="w-6 h-6 " />
            </div>
          </button>
        </div>
      )}
    </main>
  );
};
