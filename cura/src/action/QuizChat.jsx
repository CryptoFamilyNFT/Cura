import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { Topic } from "@mui/icons-material";

export const ChatCurina = async (
  messages = [{ sender: "assistant", text: "Hi there 👋 How can I help you today?" }],
  saveInStorage = false,
) => {
  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    temperature: 0.7,
    apiKey: "", // Inserisci qui la tua API Key
});

  // Mappa i messaggi nel formato richiesto da LangChain
  const langchainMessages = messages.map((msg) =>
    msg.sender === "user"
      ? new HumanMessage(msg.text)
      : new AIMessage(msg.text)
  );

  // Esegui il modello sui messaggi
  const result = await llm.invoke(langchainMessages);

  // Salvataggio opzionale
  if (saveInStorage && typeof localStorage !== "undefined") {
    localStorage.setItem(Topic, JSON.stringify(result));
  }

  return result;
};
