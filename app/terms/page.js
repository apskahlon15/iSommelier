import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-lg text-gray-700">
        <p className="font-semibold text-xl">Effective Date: 3rd November, 2024</p>
        
        <p>Welcome to iSommelier!</p>
        <p>By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using the site. If you do not agree with any part of these terms, you should not use our services.</p>

        <h2 className="text-2xl font-semibold mt-6">1. Use of Our Website</h2>
        <ul className="list-disc pl-6">
          <li>You must be 21 years of age or older to access any products or services on this website.</li>
          <li>You agree to use our website only for lawful purposes and in accordance with these terms.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. Privacy</h2>
        <p>Your privacy is important to us. Please refer to our <a href="/privacy" className="text-blue-600">Privacy Policy</a> for detailed information about how we collect, use, and protect your personal data.</p>

        <h2 className="text-2xl font-semibold mt-6">3. Prohibited Activities</h2>
        <ul className="list-disc pl-6">
          <li>Using the website for any unlawful purpose.</li>
          <li>Attempting to gain unauthorized access to any system or network.</li>
          <li>Interfering with the operation of the website or other users access.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Disclaimers and Limitation of Liability</h2>
        <ul className="list-disc pl-6">
          <li>We provide the website &quot;as is&quot; and do not warrant that it will be error-free or uninterrupted.</li>
          <li>To the extent permitted by law, we disclaim all liability for any damages arising from the use of this website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Governing Law</h2>
        <p>These terms are governed by and construed in accordance with the laws, and you agree to submit to the exclusive jurisdiction of the courts.</p>

        <h2 className="text-2xl font-semibold mt-6">6. Changes to the Terms of Service</h2>
        <p>We reserve the right to update or modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. It is your responsibility to review these terms periodically.</p>

        <h3 className="text-xl font-semibold mt-6">Contact Us</h3>
        <p>If you have any questions about these terms, please contact us at:</p>
        <p>Email: iSommelier.wine@edu.com</p>
        <p>Phone: 403-XXX-XXXX</p>
      </div>
    </div>
  )
}

export default TermsOfService
