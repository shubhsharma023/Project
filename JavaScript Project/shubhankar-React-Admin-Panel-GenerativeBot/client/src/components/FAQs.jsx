import { InView } from '@/components/core/in-view';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the account settings page and click on "Reset Password". Follow the instructions sent to your email to complete the process.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact support by emailing support@example.com or by using the live chat feature on our website.',
  },
  {
    question: 'Where can I find the course materials?',
    answer: 'Course materials are available in the "Resources" section of each course. You can download or view them directly from there.',
  },
  {
    question: 'How do I update my payment information?',
    answer: 'To update your payment information, go to the billing section of your account settings and update your payment details.',
  },
  {
    question: 'Can I change my course after enrollment?',
    answer: 'Yes, you can change your course within the first two weeks of enrollment. After that period, changes may be subject to additional fees.',
  },
  {
    question: 'How do I request a refund?',
    answer: 'To request a refund, please contact our support team with your order details. Refund requests are processed according to our refund policy.',
  },
  // Add more FAQs as needed
];

export function FAQs() {
  return (
    <div className='h-full w-full overflow-auto pt-12 pb-12'>
      <div className='flex justify-center'>
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className='space-y-6 px-8'>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
              className='bg-white p-4 text-center'
            >
              <h3 className='text-xl font-bold mb-2'>Some Frequently Asked Questions</h3>
            </motion.div>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  },
                }}
                className='bg-white p-4 rounded-lg shadow-md'
              >
                <h3 className='text-lg font-semibold mb-2'>{faq.question}</h3>
                <p className='text-gray-700'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </div>
  );
}
