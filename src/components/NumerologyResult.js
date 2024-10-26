import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

function NumerologyResult({ result }) {
  const shareUrl = window.location.href;
  const shareTitle = `Thần số học của tôi là ${result.number}! Khám phá ý nghĩa tại đây:`;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Kết quả Thần số học của bạn</h2>
      <p className="text-4xl font-bold text-center mb-4">{result.number}</p>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: result.content }} />
      <div className="flex justify-center space-x-4">
        <FacebookShareButton url={shareUrl} quote={shareTitle}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Chia sẻ trên Facebook
          </button>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Chia sẻ trên Twitter
          </button>
        </TwitterShareButton>
      </div>
    </div>
  );
}

export default NumerologyResult;
