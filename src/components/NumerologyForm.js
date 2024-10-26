import React, { useState } from 'react';
import { calculateNumerology } from '../utils/numerologyCalculations';
import { generateNumerologyContent } from '../utils/apiService';

function NumerologyForm({ setResult }) {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const numerologyNumber = calculateNumerology(birthdate);
    const content = await generateNumerologyContent(numerologyNumber, name);

    setResult({ number: numerologyNumber, content });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Họ và tên
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nhập họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">
          Ngày sinh
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="birthdate"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Đang tính toán...' : 'Xem kết quả'}
        </button>
      </div>
    </form>
  );
}

export default NumerologyForm;
