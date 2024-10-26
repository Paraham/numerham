import { generateNumerologyContent } from '../src/utils/apiService';

export default async function handler(req, res) {
  const { number, name } = req.body;
  try {
    const content = await generateNumerologyContent(number, name);
    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi khi tạo nội dung' });
  }
}
