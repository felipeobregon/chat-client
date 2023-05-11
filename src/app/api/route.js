import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai'


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



export async function GET() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });

  return NextResponse.json(response.data);
}