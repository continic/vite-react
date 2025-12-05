import './App.css'

function App() {
  const email = 'Carlton.jerome1@gmail.com';
  
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-purple-50 to-white">
        <nav className="flex justify-between items-center px-6 py-5 max-w-5xl mx-auto">
          <div className="text-xl font-bold">
            <span className="text-purple-700">Jerome</span> Carlton
          </div>
          <a 
            href={`mailto:${email}`}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full text-sm transition-all"
          >
            Get in Touch
          </a>
        </nav>
        
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-700 text-sm font-medium">
            Addiction Recovery Coach & Mental Health Counselor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight text-slate-900">
            Your Journey to{' '}
            <span className="text-purple-700">Recovery Starts Here</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Personalized addiction recovery coaching rooted in lived experience. 
            Dedicated to empowering the minority community with compassionate, 
            judgment-free support.
          </p>
          <a 
            href={`mailto:${email}?subject=Coaching Inquiry`}
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-amber-500/30"
          >
            Book a Free Consultation
          </a>
        </div>
      </header>

      {/* Why Choose Me - 4 cards */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">✊🏾</div>
            <div className="font-bold text-sm text-slate-800">Community Focused</div>
            <div className="text-slate-500 text-xs mt-1">Serving minority communities</div>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">💪</div>
            <div className="font-bold text-sm text-slate-800">Lived Experience</div>
            <div className="text-slate-500 text-xs mt-1">I've walked this path</div>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🤝</div>
            <div className="font-bold text-sm text-slate-800">Judgment-Free</div>
            <div className="text-slate-500 text-xs mt-1">Safe space to heal</div>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">📍</div>
            <div className="font-bold text-sm text-slate-800">Atlanta & Virtual</div>
            <div className="text-slate-500 text-xs mt-1">In-person or online</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-900">
          From Lived Experience to <span className="text-purple-700">Lasting Change</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-600 mb-4">
              I understand the struggle because I've been there. My journey through 
              addiction and recovery taught me that healing is possible—and that 
              having the right support makes all the difference.
            </p>
            <p className="text-slate-600 mb-4">
              I created this practice specifically for the minority community, 
              where mental health awareness is still growing. Too often, our community 
              doesn't get the attention and resources we deserve.
            </p>
            <p className="text-slate-600">
              Here, you'll find a safe space free from judgment, where your experiences 
              are understood and your recovery is the priority.
            </p>
          </div>
          <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-purple-700 mb-4">What I Bring To Your Journey</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                Personal recovery experience—I know what you're going through
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                Ongoing certification training to serve you better
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                Deep understanding of minority community challenges
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                Flexible scheduling that works around your life
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                Transportation assistance for local clients who need it
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-purple-50 border border-purple-100 rounded-xl p-5 text-center">
          <p className="text-lg italic text-slate-700">
            "It's motivational to wake up and help people. That's what drives me every single day."
          </p>
          <p className="text-purple-700 font-semibold mt-2">— Jerome Carlton</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 max-w-5xl mx-auto bg-amber-50 rounded-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-slate-900">
          How I Can <span className="text-purple-700">Help You</span>
        </h2>
        <p className="text-slate-500 text-center mb-8">
          Flexible support options designed to meet you where you are
        </p>
        
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-lg font-bold mb-2 text-slate-800">Virtual Sessions</h3>
            <p className="text-slate-500 text-sm mb-3">
              One-on-one video sessions via Zoom from the comfort of your home.
            </p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>• Private & confidential</li>
              <li>• Flexible time slots</li>
              <li>• No commute needed</li>
            </ul>
          </div>
          
          <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-lg font-bold mb-2 text-slate-800">In-Person Meetings</h3>
            <p className="text-slate-500 text-sm mb-3">
              Face-to-face sessions in Atlanta. Transportation provided if needed.
            </p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>• Atlanta metro area</li>
              <li>• Rides available</li>
              <li>• Comfortable setting</li>
            </ul>
          </div>
          
          <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-bold mb-2 text-slate-800">Ongoing Support</h3>
            <p className="text-slate-500 text-sm mb-3">
              Recovery is a journey. I provide continuous guidance as you grow.
            </p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>• Regular check-ins</li>
              <li>• Progress tracking</li>
              <li>• Long-term partnership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-900">
          Who I <span className="text-purple-700">Work With</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white border-2 border-purple-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-3">This Is For You If...</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                You're struggling with addiction and ready for change
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                You want support from someone who truly understands
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                You've felt overlooked by traditional mental health services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                You need flexible scheduling that fits your life
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-purple-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-3">What To Expect</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">1.</span>
                Free initial consultation to discuss your situation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">2.</span>
                Personalized recovery plan based on your needs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">3.</span>
                Regular sessions (virtual or in-person)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">4.</span>
                Ongoing support and accountability
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-purple-100 text-lg mb-6 max-w-xl mx-auto">
            Your path to recovery begins with a single conversation. 
            Reach out today for a free, confidential consultation.
          </p>
          <a 
            href={`mailto:${email}?subject=I'm Ready to Start My Recovery Journey`}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me Today
          </a>
          <p className="mt-4 text-purple-200 font-medium">{email}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 text-center px-6 bg-slate-50">
        <div className="text-xl font-bold mb-2 text-slate-800">
          <span className="text-purple-700">Jerome</span> Carlton
        </div>
        <p className="text-slate-500 text-sm mb-1">
          Addiction Recovery Coach & Mental Health Counselor
        </p>
        <p className="text-slate-400 text-xs">
          Atlanta, GA & Virtual • © 2024
        </p>
      </footer>
    </div>
  );
}

export default App
