import { useContext, useState, useRef, useEffect } from "react";
import { UploadButton } from "../components/UploadButton";
import { ThemeContext } from "../context/ThemeContext";
import { FileContext } from "../context/FileContext";
import "../customStyles/customScrollbar.css";
import { AskQuestion } from "../config/DataApp";
import { LoadingScreen } from "../components/LoadingScreen";

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { file, setFile } = useContext(FileContext);
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(
    "Colombia cuenta con más de 50 millones de habitantes, según la información proporcionada en el texto. Este dato destaca su población densa y urbana, especialmente evidente en ciudades como Bogotá, Medellín, Cartagena y Cali. La alta concentración poblacional ha sido un factor que impulsa tanto el desarrollo económico de la nación a través del turismo y las exportaciones agrícolas, como también presenta desafíos en términos de seguridad e infraestructura urbana. Sin embargo, Colombia está progresando para ofrecer una vida mejor a sus ciudadanos mediante inversiones significativas en educación y bienes raíces residenciales y comerciales."
  );

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const HandleSubmit = async () => {
    setLoading(true);
    const res = await AskQuestion({ prompt: text });
    const data = res.data?.prompt;
    console.log(data);
    setResponse(data);
    setLoading(false);
  };

  return (
    <main className="w-[70%] h-screen justify-center items-center flex flex-col">
      {loading && <LoadingScreen />}
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
        <div className="flex flex-col gap-2.5 bg-[#333] rounded-md p-5">
          <textarea
            placeholder="Make a question..."
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=" px-2.5 py-2 text-white focus:outline-none w-[600px] resize-none custom-scrollbar"
            rows={1}
            style={{ minHeight: "40px", maxHeight: "400px" }}
          />
          <div className="flex flex-row justify-between items-center">
            <button
              className="cursor-pointer"
              onClick={() => {
                setText("");
                setFile(null);
                setLoading(false);
                setResponse("");
              }}
            >
              <p>Clear Files</p>
            </button>
            <button onClick={() => HandleSubmit()} className="cursor-pointer">
              <div>
                <img src="send.svg" alt="arrow-right" className="w-6 h-6 " />
              </div>
            </button>
          </div>
        </div>
      )}
      {response && (
        <div className="flex flex-col gap-2.5 bg-[#333] rounded-md p-5 mt-10">
          <p className="text-white">{response}</p>
        </div>
      )}
    </main>
  );
};
