import "dotenv/config";
import { createAgent } from "langchain";
import WEATHER_BOT_SYSTEM_PROMPT from "./system-prompt/weatherBots.prompt.ts";
import { ChatOpenRouter } from "@langchain/openrouter";

const weatherModel = new ChatOpenRouter( {
  model: "openrouter/free",
  temperature: 0.7,
});

const agent = createAgent({
  model: weatherModel,
  systemPrompt: WEATHER_BOT_SYSTEM_PROMPT,
  tools: [],
});

export const executeWeatherAgent = async (question: string): Promise<unknown[]> => {
  try {
    const response = await agent.invoke({
      messages: [{ role: "user", content: question }],
    });
    console.log(response.messages)
    return response.messages;
  } catch (error) {
    console.error(error);
    throw Error("Something went wrong");
  }
};
