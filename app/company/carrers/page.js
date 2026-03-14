import React from 'react'
import Title from '@/components/Title'
import Image from 'next/image'
import Link from 'next/link'
import { careers } from '../careers/openingsConfig'


const CareersPage = async () => {

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50/50 py-20">
      <Title titleText="Topform" titleHighlight="Carrers" />

      <div className="w-[90%] max-w-7xl mx-auto mt-6 grid gap-10 lg:grid-cols-[2fr,3fr] items-start">
        {/* Intro + image */}
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            At Topform Technologies, we are always looking for talented individuals to join our team.
            If you are interested in working with us, explore our current openings and submit your profile.
          </p>
          <div className="w-full rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/assets/hiring.jpg"
              alt="Carrers"
              width={1320}
              height={450}
              className="w-full h-[260px] md:h-[320px] object-cover"
            />
          </div>
        </div>

        {/* Openings list */}
        <div className="bg-white rounded-3xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <p className="text-sm text-gray-500 mb-5">
            Click on a role to view full details, responsibilities, and how to apply.
          </p>

          <div className="space-y-3">
            {careers.map((job) => (
              <Link
                key={job.slug}
                href={`/company/carrers/${job.slug}`}
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
      </div>
      
    </div>
  )
}

export default CareersPage