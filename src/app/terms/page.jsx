export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="mb-4 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-sm leading-7">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using SkillSphere, you agree to comply with and
              be bound by these Terms & Conditions. If you do not agree, please
              do not use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Use of the Platform
            </h2>
            <p>
              SkillSphere provides online educational content. You agree to use
              the platform only for lawful purposes and not to misuse or disrupt
              its services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials. Any activity under your account is your
              responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Content</h2>
            <p>
              All courses, materials, and content are owned by SkillSphere or
              its instructors. You may not copy, distribute, or resell any
              content without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account if you
              violate these terms or engage in harmful behavior.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Changes</h2>
            <p>
              We may update these Terms & Conditions at any time. Continued use
              of the platform means you accept the updated terms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
