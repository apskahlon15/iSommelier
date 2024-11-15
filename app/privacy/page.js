import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-lg text-gray-700">
        <p className="font-semibold text-xl">Effective Date: 3rd November, 2024</p>
        
        <p>At iSommelier, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information.</p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li><strong>Personal Identification Information</strong>: Name and email address.</li>
          <li><strong>Usage Information</strong>: Information about your interactions with our website, including IP addresses, browser type, and pages viewed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>Improve our website and customer experience.</li>
          <li>Send you promotional emails (if you opt in).</li>
          <li>Respond to customer inquiries and provide customer support.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. How We Protect Your Information</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information. All sensitive payment data is encrypted and securely transmitted via SSL.</p>

        <h2 className="text-2xl font-semibold mt-6">4. Sharing Your Information</h2>
        <ul className="list-disc pl-6">
          <li>We do not sell, trade, or transfer your personal information to outside parties without your consent, except for trusted third-party service providers.</li>
          <li>If required by law or legal processes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Your Data Rights</h2>
        <ul className="list-disc pl-6">
          <li><strong>Access</strong>: Request access to the personal information we hold about you.</li>
          <li><strong>Correction</strong>: Request corrections to any inaccurate or incomplete information.</li>
          <li><strong>Deletion</strong>: Request the deletion of your personal information (subject to certain limitations).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">6. Changes to This Privacy Policy</h2>
        <p>We reserve the right to modify or update this Privacy Policy. Changes will be posted on this page, and the effective date will be updated.</p>

        <h3 className="text-xl font-semibold mt-6">Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: iSommelier.wine@edu.com</p>
        <p>Phone: 403-XXX-XXXX</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
