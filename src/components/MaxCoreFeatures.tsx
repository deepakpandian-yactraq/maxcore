import React from "react";

const features = [
  {
    title: "Max Productivity",
    type: "Benefit",
    description:
      "We built MaxCore for the person writing the code. Get the seamless experience of a hyperscaler without the configuration headaches. It’s deployment at Max productivity.",
  },
  {
    title: "Max Savings",
    type: "Benefit",
    description:
      "Why pay full price? Our platform identifies and aggregates the most cost-effective compute providers every hour, passing most of the savings directly to your bottom line.",
  },
  {
    title: "Max Turbocharging",
    type: "Benefit",
    description:
      "Our software acceleration tools are available on our platform. Get more out of every hour of compute, making your stack run faster and leaner.",
  },
  {
    title: "Max Reliability",
    type: "Feature",
    description:
      "A decentralized network of hundreds of Tier-3 and Tier-4 data centers managed by our proprietary Self-Healing Engine.",
  },
  {
    title: "Max Transparency",
    type: "Benefit",
    description:
      "No hidden networking fees or surprise add-ons. You see exactly what you pay for by the hour.Pure compute, pure visibility.",
  },
];

export default function MaxCoreFeatures() {
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3);

  return (
    <section id="features" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Key Features & Benefits
        </h2>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* First Row (3 items) */}
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800"
            >
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wide text-gray-400">
                  {item.type}
                </span>
                <h3 className="text-2xl font-semibold mt-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Second Row (2 items centered, 50/50) */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
            {secondRow.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800"
              >
                <div className="mb-4">
                  <span className="text-sm uppercase tracking-wide text-gray-400">
                    {item.type}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
