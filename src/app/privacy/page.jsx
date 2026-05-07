export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-sm leading-7">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect basic user information such as name, email address, and
              profile image when you register on SkillSphere.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to provide access to courses, personalize
              your learning experience, and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
            <p>
              We take reasonable measures to protect your data from unauthorized
              access, loss, or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
            <p>
              SkillSphere may use cookies to improve user experience and track
              usage analytics.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party services (like authentication providers or
              analytics tools) which have their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p>
              You can request access, correction, or deletion of your personal
              data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Updates</h2>
            <p>
              This Privacy Policy may be updated periodically. Please review it
              regularly.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
