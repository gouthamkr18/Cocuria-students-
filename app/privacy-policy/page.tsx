import PolicyPage from "@/components/policy-page";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      lastUpdated="October 14, 2026"
      content={`
        <h2>1. Information We Collect</h2>
        <p>When you interact with Cocuria, we may collect personal information such as your name, phone number, email address, and student details when you submit an enquiry or register for our programs.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information collected to respond to your enquiries, provide customer support, coordinate co-curricular and theatre workshop sessions, and send important updates regarding your engagement with Cocuria.</p>

        <h2>3. Data Security</h2>
        <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>4. Sharing of Information</h2>
        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except as necessary to provide our services or comply with legal obligations.</p>

        <h2>5. Contact Us</h2>
        <p>If you have any questions regarding this Privacy Policy, please reach out to us through our support channels.</p>
      `}
    />
  );
}
