"use client"
import React from "react";
import Title from "../Title";
import { useState } from "react";


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
        formData.append("subject", "New Contact Form Submission - Topform Technologies");
        formData.append("from_name", "Topform Technologies Website");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: formData
        });


        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <section className="w-full bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-6 md:px-16">

            <div className="w-full flex flex-col items-center mb-14">
                <Title titleText="Contact" titleHighlight="Us" />
                <p className="text-gray-500 text-sm md:text-base mt-4 text-center max-w-2xl">
                    We offer home & industry-leading IT solutions and support across
                    financial services, pharmaceutical, retail, hospitality and more.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 md:p-12 border border-gray-200">

                <form action="" className="space-y-6" onSubmit={onSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="[Full Name]"
                                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 text-sm font-medium">

                                Email Address
                            </label>
                            <input

                                type="email"
                                name="email"
                                placeholder="[EMAIL_ADDRESS]"
                                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 text-sm font-medium">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="+971 50 123 4567"
                                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 text-sm font-medium">
                                Select Service
                            </label>
                            <select
                                name="service"
                                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                <option>Select Service</option>
                                <option>ERP & Inventory Systems</option>
                                <option>Data Analytics Solutions</option>
                                <option>Automated Workflows</option>
                            </select>
                        </div>

                    </div>


                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                        ></textarea>
                    </div>


                    <div className="flex justify-center md:justify-end">
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            Get a Quote →
                        </button>
                    </div>

                </form>
                <span>{result}</span>
            </div>
        </section>
    );
};

export default Contact;