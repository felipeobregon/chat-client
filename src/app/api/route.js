import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai'


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request) {
  const res = await request.json()

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: res.prompt,
        max_tokens: 200,
        temperature: 0,
      });


  return NextResponse.json(response.data.choices[0].text);
}