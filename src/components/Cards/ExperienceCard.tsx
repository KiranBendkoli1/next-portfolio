import React from "react";

const ExperienceCard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-sm text-gray-400">Jun 2023 – Present</p>
            <ul className="mt-4 space-y-2 list-disc  text-gray-300 text-justify">
              <li>
                Led development of scalable frontend and micro-frontend systems
                using React and Next.js
              </li>
              <li>
                Architected and implemented full-stack features with Node.js and
                PostgreSQL
              </li>
              <li>
                Built event-driven microservices architecture using Kafka and
                Express
              </li>
              <li>
                Optimized application performance and implemented responsive
                design patterns
              </li>
              <li>
                Integrated third-party APIs and services into existing
                applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
