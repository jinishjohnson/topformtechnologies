import React from "react";
import Link from "next/link";
import Image from "next/image";
import { careers } from "./openingsConfig";
import Title from "@/components/Title";


export const metadata = {
  title: "Careers | Topform Technologies",
  description:
    "Explore open roles across engineering, design, field service, and marketing. Click a position to see full details and how to apply.",
};

const CareersPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50/50 py-20">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <Title titleText="Current" titleHighlight="Openings" />
          <p className="text-gray-600 text-left max-w-2xl ">
            Explore open roles across engineering, design, field service, and
            marketing. Click a position to see full details and how to apply.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start">
          {/* Openings list */}
          <div className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
            <div className="space-y-3">
              {careers.map((job) => (
                <Link
                  key={job.slug}
                  href={`/company/careers/${job.slug}`}
                  className="block rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-blue-50 hover:border-blue-200 transition-colors px-4 py-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
                        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow-sm">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow-sm">
                          {job.type}
                        </span>
                        {job.salary && (
                          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow-sm">
                            {job.salary}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">
                      View details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/assets/hiring.jpg"
                alt="Join the Topform team"
                width={900}
                height={600}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-3xl shadow-md p-5 text-sm text-gray-700 leading-relaxed">
              <p>
                Don&apos;t see an exact match? We&apos;re always happy to hear
                from strong candidates. Send your CV and a short note about what
                you&apos;d like to work on to{" "}
                <a
                  href="mailto:hr@topformtechnologies.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  hr@topformtechnologies.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;