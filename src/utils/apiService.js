import axios from 'axios';

export async function generateNumerologyContent(number, name) {
  try {
    // const response = await axios.post(
    //   'https://api.openai.com/v1/engines/text-davinci-002/completions',
    //   {
    //     prompt: `Viết một đoạn văn ngắn về ý nghĩa của số ${number} trong thần số học cho ${name}:`,
    //     max_tokens: 150,
    //     n: 1,
    //     stop: null,
    //     temperature: 0.7,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //     },
    //   }
    // );

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC3uQSf7b-r6QqgIWF91oNLvRrWxaPTrsQ`,
      {"contents":[{"parts":[{"text":`Viết một đoạn văn ngắn về ý nghĩa của số ${number} trong thần số học cho ${name}:`}]}]},
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    console.log(response);

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Lỗi khi gọi API GeminiAI:', error);
    return 'Xin lỗi, đã có lỗi xảy ra khi tạo nội dung. Vui lòng thử lại sau.';
  }
}
