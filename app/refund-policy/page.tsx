import PolicyPage from "@/components/policy-page";

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund & Cancellation Policy"
      lastUpdated="October 14, 2026"
      content={`
        <h2>1. Registration & Enrolment Fees</h2>
        <p>All program enrolments, theatre workshop fees, and educational course registrations made through Cocuria are evaluated individually upon purchase.</p>

        <h2>2. Refund Eligibility</h2>
        <p>If a program session is canceled or rescheduled by Cocuria and you are unable to attend the revised timeline, you may request a full refund or transfer your credits to an upcoming batch.</p>

        <h2>3. Cancellation Requests</h2>
        <p>Cancellation requests made by participants prior to the commencement of a batch or workshop will be reviewed on a case-by-case basis. Administrative processing charges may apply.</p>

        <h2>4. Processing Timelines</h2>
        <p>Approved refunds will be processed back to the original method of payment within 5 to 7 business days.</p>

        <h2>5. Contact Support</h2>
        <p>For refund inquiries or assistance regarding payments, please connect with our support team.</p>
      `}
    />
  );
}
