export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Healthcare AI
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Patients Will{" "}
          <span className="text-[#58a6ff]">Miss Their Appointment</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload patient history, get instant no-show risk scores, and receive tailored intervention recommendations — before the appointment is missed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">87%</div>
            <div className="text-xs text-[#8b949e] mt-1">Prediction Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">-34%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg No-Show Reduction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">5 min</div>
            <div className="text-xs text-[#8b949e] mt-1">CSV Import Setup</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Practice</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per practice</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited patient predictions</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CSV &amp; API import</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Intervention recommendations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Risk score dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; SMS alert templates</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border border-[#21262d] rounded-lg bg-[#161b22] p-5">
            <h3 className="font-semibold text-white mb-2">How does the no-show prediction work?</h3>
            <p className="text-sm text-[#8b949e]">Our ML model analyzes historical appointment data, patient demographics, appointment type, lead time, and past no-show behavior to generate a risk score from 0–100 for each upcoming appointment.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg bg-[#161b22] p-5">
            <h3 className="font-semibold text-white mb-2">How do I import my patient data?</h3>
            <p className="text-sm text-[#8b949e]">Upload a CSV export from any practice management system (Epic, Athena, Kareo, etc.) or connect via our REST API. Setup takes under 5 minutes with our guided import wizard.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg bg-[#161b22] p-5">
            <h3 className="font-semibold text-white mb-2">Is patient data HIPAA compliant?</h3>
            <p className="text-sm text-[#8b949e]">Yes. All data is encrypted at rest and in transit. We sign a Business Associate Agreement (BAA) with every practice and never share or sell patient data.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} NoShow Predictor. All rights reserved.
      </footer>
    </main>
  );
}
