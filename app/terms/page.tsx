import PolicyPage from "@/components/policy-page";

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      lastUpdated="October 14, 2026"
      content={`
        <h2>1. Introduction</h2>
        <p>Welcome to Cocuria. By accessing our website, registering for our co-curricular programs, or engaging with our theatre workshops, you agree to comply with and be bound by these Terms and Conditions.</p>

        <h2>2. Services Offered</h2>
        <p>Cocuria provides co-curricular educational programs, student workshops, institutional support services, and digital media content designed to enhance student development.</p>

        <h2>3. User Responsibilities</h2>
        <p>You agree to provide accurate, current, and complete information when submitting enquiries, registering for programs, or interacting with our portal. You are responsible for maintaining the confidentiality of any account credentials.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content, branding, logos, curriculum materials, and animated video guides provided by Cocuria are the intellectual property of Fredy Ventures and are protected by applicable copyright and trademark laws.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Cocuria and its operators shall not be held liable for any indirect, incidental, or consequential damages arising out of or in connection with the use of our services or website.</p>

        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify or replace these Terms and Conditions at any time. Continued use of the platform following any changes constitutes acceptance of those changes.</p>

        <h2>7. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us through our official support channels.</p>
      `}
    />
  );
}
