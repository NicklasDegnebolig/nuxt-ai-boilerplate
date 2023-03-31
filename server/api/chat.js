import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
export default defineEventHandler(async (event) => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Hello world',
    })
    return {
      result: completion.data.choices[0].text,
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
  }
})
