'use client';
import React, { use, useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: 'What is Pawsitive Change?',
    answer:
      'Pawsitive Change is a nonprofit organization dedicated to improving the lives of animals and people through innovative shelter support, rehabilitation programs, and emergency relief services.',
  },
  {
    question: 'How do you support animal shelters?',
    answer: '',
  },
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ background: '#fff', padding: '40px 0 0 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ color: '#6FCF97', fontWeight: 700, fontSize: 12 }}>FAQs</span>
        </div>
        <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 32 }}>Frequently Asked Questions</h2>
        {faqData.map((faq, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: '1px solid #E0E0E0',
              padding: '24px 0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 24,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 32, color: '#BDBDBD', minWidth: 40 }}>{
              (idx + 1).toString().padStart(2, '0')
            }</div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 8,
                  color: '#222',
                  cursor: 'pointer',
                }}
                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              >
                {faq.question}
              </div>
              {openIndex === idx && faq.answer && (
                <div style={{ color: '#4F4F4F', fontSize: 14, marginBottom: 8 }}>{faq.answer}</div>
              )}
            </div>
            <div style={{ marginTop: 6 }}>
              {idx === 0 ? (
                <span
                  style={{
                    display: 'inline-block',
                    width: 24,
                    height: 24,
                    background: '#FF5A5F',
                    borderRadius: '50%',
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: '24px',
                  }}
                >
                  –
                </span>
              ) : (
                <span
                  style={{
                    display: 'inline-block',
                    width: 24,
                    height: 24,
                    background: '#F2F2F2',
                    borderRadius: '50%',
                    textAlign: 'center',
                    color: '#222',
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: '24px',
                  }}
                >
                  +
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
