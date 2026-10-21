import PolicyPage from "@/components/policy-page";

export default function SupportPage() {
  return (
    <PolicyPage
      title="Help & Support"
      lastUpdated="October 14, 2026"
      content={`
        <h2>1. Getting Help</h2>
        <p>If you need assistance with our co-curricular programs, student workshops, or portal navigation, our support team is here to help you.</p>

        <h2>2. Enquiry Support</h2>
        <p>For questions related to school admissions, theatre classes, or curriculum partnerships, please submit an enquiry through our main platform.</p>

        <h2>3. Response Timelines</h2>
        <p>We strive to respond to all support requests and enquiries within 24 to 48 business hours.</p>

        <h2>4. Contact Channels</h2>
        <p>You can reach out to us via our registered email support channels or connect directly with our coordination desk during working hours.</p>
      `}
    />
  );
}
