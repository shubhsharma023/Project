import FeedBackCard from '@/components/FeedBack/FeedBackCard';
import Loader from '@/components/Loader/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FeedBack = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      getFeedBack();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getFeedBack = async () => {
    try {
      const resp = await axios.get(import.meta.env.VITE_FEEDBACK);
      setFeedback(resp.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const totalQueries = feedback.length;

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen fixed top-0 left-0 w-full'>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <div className='flex justify-end mr-5 items-center'>
        <div className='p-4 font-semibold text-2xl font-mono flex items-center'>
          Total Queries
          <div className='h-4 border-l-2 border-gray-300 mx-2'></div>
          {totalQueries}
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-4 md:p-8">
        {feedback.map((feedbackItem, index) => (
          <FeedBackCard key={index} feedback={feedbackItem} getFeedBack={getFeedBack} />
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
