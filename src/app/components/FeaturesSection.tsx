import { Globe2, Shield, Zap } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the features that set us apart from the competition
          </p>
        </div>

        <ul className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {[
            {
              icon: <Zap className="h-8 w-8" aria-hidden="true" />,
              title: "Lightning Fast",
              description: "Experience blazing fast performance with our optimized platform.",
            },
            {
              icon: <Shield className="h-8 w-8" aria-hidden="true" />,
              title: "Secure by Design",
              description: "Your data is protected with enterprise-grade security measures.",
            },
            {
              icon: <Globe2 className="h-8 w-8" aria-hidden="true" />,
              title: "Global Reach",
              description: "Connect with users worldwide through our distributed network.",
            },
          ].map((feature, index) => (
            <li
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary">{feature.icon}</div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
