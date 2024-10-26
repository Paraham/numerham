import axios from 'axios';

export async function generateNumerologyContent(number, name) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        prompt: `Viết một đoạn văn ngắn về ý nghĩa của số ${number} trong thần số học cho ${name}:`,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Lỗi khi gọi API OpenAI:', error);
    return 'Xin lỗi, đã có lỗi xảy ra khi tạo nội dung. Vui lòng thử lại sau.';
  }
}
