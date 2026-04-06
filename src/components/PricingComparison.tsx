import React, { useEffect, useState } from "react";

interface PricingRow {
  gpu: string;
  aws: number;
  gcp: number;
  azure: number;
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
  { gpu: "H100 80GB", aws: 7.5, gcp: 11.06, azure: 6.98 },
  { gpu: "A100 80GB", aws: 6.25, gcp: 6.25, azure: 4.46 },
  { gpu: "V100 32GB", aws: 2.48, gcp: 2.73, azure: 2.89 },
  { gpu: "RTX 4090", aws: 1.89, gcp: 2.15, azure: 2.28 },
];

const PricingComparison: React.FC = () => {
  const [gpuMap, setGpuMap] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("https://console.maxcore.cloud/v1/gpus")
      .then((res) => res.json())
      .then((data: ApiGPU[]) => {
        const map: Record<string, number> = {};

        data.forEach((gpu) => {
          const name = gpu.model.toLowerCase();

          if (name.includes("h100")) map["H100 80GB"] = gpu.price;
          if (name.includes("a100")) map["A100 80GB"] = gpu.price;
          if (name.includes("v100")) map["V100 32GB"] = gpu.price;
          if (name.includes("4090")) map["RTX 4090"] = gpu.price;
        });

        setGpuMap(map);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  const formatPrice = (price: number) => `$${price.toFixed(2)}/hour`;

  const calculateSavings = (
    aws: number,
    gcp: number,
    azure: number,
    depin: number
  ) => {
    const avg = (aws + gcp + azure) / 3;
    const savings = ((avg - depin) / avg) * 100;
    return `${Math.round(savings)}%`;
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the Real Savings
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
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
                const depinPrice = gpuMap[item.gpu];

                return (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 text-center">{item.gpu}</td>

                    <td className="py-4 px-6 text-center">
                      {formatPrice(item.aws)}
                    </td>

                    <td className="py-4 px-6 text-center">
                      {formatPrice(item.gcp)}
                    </td>

                    <td className="py-4 px-6 text-center">
                      {formatPrice(item.azure)}
                    </td>

                    <td className="py-4 px-6 text-center text-white">
                      {depinPrice
                        ? formatPrice(depinPrice)
                        : "Loading..."}
                    </td>

                    <td className="py-4 px-6 text-center text-secondary">
                      {depinPrice
                        ? calculateSavings(
                            item.aws,
                            item.gcp,
                            item.azure,
                            depinPrice
                          )
                        : "--"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default PricingComparison;
