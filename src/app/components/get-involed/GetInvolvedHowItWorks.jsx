export default function GetInvolvedHowItWorks() {
  const steps = [
    { icon: "📝", title: "Sign Up", desc: "Fill out our simple form to get started." },
    { icon: "🤝", title: "Connect", desc: "We'll reach out to discuss how you can help." },
    { icon: "🐶", title: "Get Matched", desc: "We'll match you with the perfect opportunity." },
    { icon: "🎉", title: "Make Impact", desc: "Start making a difference in animals' lives!" },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">How It Works?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <div className="text-3xl mb-2">{step.icon}</div>
            <div className="font-bold text-base mb-1 text-center">{step.title}</div>
            <div className="text-gray-600 text-sm text-center">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 