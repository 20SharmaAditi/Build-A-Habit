import React from "react";

function TermsAndConditions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Terms and Conditions
        </h1>

        <p className="text-gray-500 text-sm text-right mb-6">
          Last updated: 31-August-2024
        </p>

        <p className="text-gray-600 mb-6">
          Welcome to our Medicine Logging Website. By using our service, you
          agree to comply with and be bound by the following terms and
          conditions. Please review the following carefully before using our
          service.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          1. General Usage
        </h2>
        <p className="text-gray-600 mb-6">
          The purpose of this website is to help users log and track their
          medication routine, including reminders and missed doses. The
          information provided by you should be accurate to ensure effective
          tracking. By using our service, you agree not to misuse the platform
          for any illegal or unauthorized purposes.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          2. Account Registration
        </h2>
        <p className="text-gray-600 mb-6">
          When you register for an account, you agree to provide accurate and
          complete information. You are responsible for maintaining the
          confidentiality of your account credentials and agree to notify us
          immediately of any unauthorized use of your account.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          3. Privacy Policy
        </h2>
        <p className="text-gray-600 mb-6">
          Your privacy is important to us. We collect, store, and use personal
          information only in accordance with our Privacy Policy. By using our
          service, you consent to the collection and use of your information as
          outlined in our Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          4. Data Security
        </h2>
        <p className="text-gray-600 mb-6">
          We take the security of your data seriously. All your medical
          information is encrypted and stored securely. However, we cannot
          guarantee absolute security, and by using our service, you acknowledge
          that you understand and accept the risks involved in transmitting
          information over the internet.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          5. Medical Disclaimer
        </h2>
        <p className="text-gray-600 mb-6">
          The information on this website is not intended to replace
          professional medical advice, diagnosis, or treatment. Always seek the
          advice of your physician or other qualified healthcare providers
          regarding any medical condition. The app only serves as a tool for
          logging and reminding users about their medications.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-6">
          We are not responsible for any loss, injury, claim, liability, or
          damage related to your use of our website, including but not limited
          to missed doses, incorrect logging, or any data breaches. By using our
          service, you acknowledge that you understand and accept these terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          7. Modifications to the Service
        </h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to modify or discontinue the service at any time
          without prior notice. We are not liable to you or any third party
          should we exercise this right. You agree that we may modify these
          terms from time to time, and any changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          8. Governing Law
        </h2>
        <p className="text-gray-600 mb-6">
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Country/State], and you agree to submit to the
          exclusive jurisdiction of the courts located in [Your Country/State].
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          9. Contact Us
        </h2>
        <p className="text-gray-600 mb-6">
          If you have any questions or concerns about these terms, feel free to
          contact us at support@medicinelogging.com.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
