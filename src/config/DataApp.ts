import { ConfigApp } from "./ConfigApp";

export const UploadFile = async ({ fileData }: { fileData: File }) => {
  try {
    const formData = new FormData();
    formData.append("file", fileData);
    const response = await fetch(`${ConfigApp.URL}/files/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export const AskQuestion = async ({ prompt }: { prompt: string }) => {
  try {
    console.log("Prompt:", prompt);
    const res = await fetch(`${ConfigApp.URL}/ask/ask_question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error asking question:", error);
  }
};
