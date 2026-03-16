import React from "react";
import Link from "next/link";
import { careers } from "../openingsConfig";
import ApplyButton from "@/components/ApplyButton";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = careers.find((c) => c.slug === slug);
  const title = job ? `${job.title} | Careers at Topform Technologies` : "Career Opportunity | Topform Technologies";
  return {
    title,
    description: job?.intro || "Join our team at Topform Technologies and build your future with an innovative IT company in Dubai.",
  };
}

export async function generateStaticParams() {
  return careers.map((job) => ({
    slug: job.slug,
  }));
}

const CareerDetailPage = async ({ params }) => {
  const { slug } = await params;
  const job =
    careers.find((c) => c.slug === slug) || {
      title: String(slug || "career-opportunity").replace(/-/g, " "),
      location: "Dubai, UAE",
      type: "Full-time",
      intro:
        "We are always interested in meeting talented people. Share your profile with us and we will get in touch when there is a match.",
      responsibilities: [],
      requirements: [],
    };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 md:py-20">
      <div className="w-[90%] max-w-4xl mx-auto">
        <Link
          href="/company/careers"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mb-6"
        >
          <span>← Back to all careers</span>
        </Link>

        <div className="bg-white shadow-lg rounded-3xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                  {job.location}
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
                  {job.type}
                </span>
                {job.salary && (
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                    {job.salary}
                  </span>
              )}
              </div>
            </div>

            <ApplyButton jobTitle={job.title} />
          </div>

          <p className="text-gray-700 mb-8">{job.intro}</p>

          {job.responsibilities?.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Requirements
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {job.requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4">
            Didn&apos;t see the exact role you were looking for? Send us your
            profile and we&apos;ll keep you in mind for future opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailPage;

