import React, { useEffect, useState } from "react";

interface PricingRow {
  gpu: string;
  aws: string;
  gcp: string;
  azure: string;
}

interface ApiGPU {
  vendor: string;
  model: string;
  ram: string;
  interface: string;
  price: number;
  currency: string;
}

const pricingData: PricingRow[] = [
  {
    gpu: "H100 80GB",
    aws: "$7.50/hour",
    gcp: "$11.06/hour",
    azure: "$6.98/hour",
  },
  {
    gpu: "A100 80GB",
    aws: "$6.25/hour",
    gcp: "$6.25/hour",
    azure: "$4.46/hour",
  },
  {
    gpu: "V100 32GB",
    aws: "$2.48/hour",
    gcp: "$2.73/hour",
    azure: "$2.89/hour",
  },
  {
    gpu: "RTX 4090",
    aws: "$1.89/hour",
    gcp: "$2.15/hour",
    azure: "$2.28/hour",
  },
];

const PricingComparison: React.FC = () => {
  const [gpuData, setGpuData] = useState<ApiGPU[]>([]);

  useEffect(() => {
    fetch("https://console.maxcore.cloud/v1/gpus")
      .then((res) => res.json())
      .then((data) => setGpuData(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  // 🔧 Helpers
  const parsePrice = (price: string) =>
    Number(price.replace("$", "").replace("/hour", ""));

  const formatPrice = (price: number) => `$${price.toFixed(2)}/hour`;

  const getDepinPrice = (gpuName: string) => {
    const name = gpuName.toLowerCase();

    return gpuData.find((gpu) => {
      const model = gpu.model.toLowerCase();

      if (name.includes("h100") && model.includes("h100")) return true;
      if (name.includes("a100") && model.includes("a100")) return true;
      if (name.includes("v100") && model.includes("v100")) return true;
      if (name.includes("4090") && model.includes("4090")) return true;

      return false;
    })?.price;
  };

  const calculateSavings = (
    aws: number,
    gcp: number,
    azure: number,
    depin: number
  ) => {
    const avg = (aws + gcp + azure) / 3;
    return Math.round(((avg - depin) / avg) * 100);
  };

  return (
    <section
      id="pricingComparison"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-dark to-dark"></div>
      <div className="absolute inset-0 bg-circuit bg-repeat opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-lg">
            See the Real Savings
          </h2>
          <p className="text-light-200/70 font-semibold max-w-4xl mx-auto glow-sm">
            Maxcore vs. Hyperscalers: Huge savings on these 4 heavy hitters, with 20+ other configurations ready to deploy.
          </p>
        </div>

        {/* SINGLE TABLE */}
        <div className="relative bg-dark-100/50 backdrop-blur-xl rounded-xl border border-primary/20 overflow-hidden">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-xl opacity-20 blur"></div>

          <div className="relative z-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="py-4 px-6 text-center">GPU Model</th>
                  <th className="py-4 px-6 text-center">AWS</th>
                  <th className="py-4 px-6 text-center">Google Cloud</th>
                  <th className="py-4 px-6 text-center">Microsoft Azure</th>
                  <th className="py-4 px-6 text-center text-white">
                    DePINtelligence
                  </th>
                  <th className="py-4 px-6 text-center text-secondary">
                    Savings
                  </th>
                </tr>
              </thead>

              <tbody>
                {pricingData.map((item, index) => {
                  const aws = parsePrice(item.aws);
                  const gcp = parsePrice(item.gcp);
                  const azure = parsePrice(item.azure);

                  const depinPrice = getDepinPrice(item.gpu);

                  return (
                    <tr key={index} className="border-b border-primary/10">
                      <td className="py-4 px-6 text-center">{item.gpu}</td>

                      <td className="py-4 px-6 text-center">{item.aws}</td>
                      <td className="py-4 px-6 text-center">{item.gcp}</td>
                      <td className="py-4 px-6 text-center">{item.azure}</td>

                      {/* Dynamic DePIN */}
                      <td className="py-4 px-6 text-center text-white">
                        {depinPrice
                          ? formatPrice(depinPrice)
                          : "Loading..."}
                      </td>

                      {/* Dynamic Savings */}
                      <td className="py-4 px-6 text-center text-secondary">
                        {depinPrice
                          ? `${calculateSavings(
                              aws,
                              gcp,
                              azure,
                              depinPrice
                            )}%`
                          : "--"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingComparison;
