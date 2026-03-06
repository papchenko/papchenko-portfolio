const Privacy = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-20 lg:px-32 bg-[radial-gradient(circle_at_top,_#0a0a0a,_#111)] min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
          Privacy Policy
        </h1>

        <p className="mb-4 text-white/70">
          Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4 text-white/70">
          We may collect personal information such as your name, email, and any messages you send through our contact form.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <p className="mb-4 text-white/70">
          The information is used to provide and improve our services, respond to inquiries, and communicate important updates.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-4 text-white/70">
          We implement reasonable security measures to protect your data. However, no method is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="mb-4 text-white/70">
          We may use third-party services like Google reCAPTCHA and EmailJS, which have their own privacy policies.
        </p>

        <p className="mt-8 text-white/50 text-sm">
          Last updated: March 2026
        </p>
      </div>
    </section>
  );
};

export default Privacy;