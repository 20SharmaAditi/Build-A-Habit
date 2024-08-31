import React, { useState } from "react";

const faqData = [
  {
    question: "How do I log a new medicine?",
    answer:
      "To log a new medicine, go to the 'Add Medicine' section, enter the medicine name, dosage, and the time you need to take it. You can also set reminders for recurring medications.",
  },
  {
    question: "Can I set reminders for taking my medicines?",
    answer:
      "Yes, you can set daily, weekly, or custom reminders for each medicine. Just choose the appropriate frequency when logging a new medicine, and we'll remind you accordingly.",
  },
  {
    question: "How do I edit or delete a logged medicine?",
    answer:
      "To edit or delete a medicine, navigate to the 'My Medicines' section, find the medicine you want to modify, and click the edit or delete button. Make sure to save your changes.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "We take your privacy seriously. All your medical data is encrypted and stored securely. Only you have access to your information, and we do not share your data with third parties without your consent.",
  },
  {
    question: "Can I track missed doses?",
    answer:
      "Yes, the app automatically logs missed doses if you don't confirm taking the medicine within a certain time frame. You can view missed doses in your 'Medicine History' section.",
  },
  {
    question: "How do I track my medication history?",
    answer:
      "You can track your medication history by going to the 'Medicine History' section, where you'll find a detailed log of the medicines you've taken and missed doses.",
  },
  {
    question: "Can I add notes for my medications?",
    answer:
      "Yes, you can add personal notes for each medicine you log. This can include instructions from your doctor, special conditions, or any other important details.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle toggling the answer visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>

        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="mt-2 p-4 bg-gray-50 text-gray-700 rounded-lg shadow-inner">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
