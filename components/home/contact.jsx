"use client"
import React from "react";
import Title from "../Title";
import { useState } from "react";
import data from "../../data.json";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import LottieAnimationCta from "../LottieCta";
import { FaLocationDot } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { LuMails } from "react-icons/lu";

const Contact = () => {
    const { about } = data;
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

        <section className="relative overflow-hidden w-full flex justify-center bg-white py-20 px-6 md:px-16">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <StarsBackground />
                <ShootingStars />
            </div>
            <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">

                {/* Left Side: Description and Image */}
                <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-full flex justify-center lg:justify-start mb-6">
                        <h1 className='flex font-sans font-bold gap-2 text-2xl md:text-5xl lg:text-5xl font-black/90 text-blue-700 leading-snug '>
                            Contact <br />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                                Us
                            </span>
                        </h1>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-500 rounded-full blur-3xl opacity-20 mix-blend-screen transition duration-500 hover:opacity-40"></div>
                        <LottieAnimationCta />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 w-full">
                        <div className="flex flex-col gap-6 w-full sm:w-1/2">
                            <div className="w-full flex items-center gap-4 shadow-blue-500/10 shadow-lg bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-black/5 hover:scale-[1.02] transition-transform">
                                <FaLocationDot className="text-blue-600 text-3xl shrink-0" />
                                <a href="#" className="font-sans text-sm md:text-base text-gray-800 leading-snug">&#35;&#51;&#48;&#54;&#44;&#32;&#51;&#114;&#100;&#32;&#70;&#108;&#111;&#111;&#114;&#44;&#32;&#65;&#108;&#32;&#81;&#111;&#117;&#122;&#32;&#52;&#44;&#32;&#68;&#117;&#98;&#97;&#105;&#44;&#32;&#85;&#65;&#69;</a>
                            </div>
                            <div className="w-full flex items-center gap-4 shadow-blue-500/10 shadow-lg bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-black/5 hover:scale-[1.02] transition-transform">
                                <RiContactsBook3Fill className="text-blue-600 text-3xl shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <a className="font-sans text-sm md:text-base hover:text-blue-600 transition-colors text-gray-800" href="tel:&#43;&#57;&#55;&#49;&#53;&#54;&#54;&#54;&#52;&#52;&#56;&#49;&#53;">
                                        &#43;&#57;&#55;&#49;&#32;&#53;&#54;&#32;&#54;&#54;&#52;&#32;&#52;&#56;&#49;&#51;
                                    </a>
                                    <a className="font-sans text-sm md:text-base hover:text-blue-600 transition-colors text-gray-800" href="tel:&#43;&#57;&#55;&#49;&#32;&#52;&#32;&#51;&#57;&#54;&#32;&#48;&#51;&#48;&#50;">
                                        &#43;&#57;&#55;&#49;&#32;&#52;&#32;&#51;&#57;&#54;&#32;&#48;&#51;&#48;&#50;
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="w-full flex items-center gap-4 shadow-blue-500/10 shadow-lg bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-black/5 hover:scale-[1.02] transition-transform">
                                <LuMails className="text-blue-600 text-3xl shrink-0" />
                                <div className="flex flex-col gap-1 overflow-hidden">
                                    <a className="text-sm md:text-base hover:text-blue-600 transition-colors text-gray-800 truncate" href="mailto:&#105;&#110;&#102;&#111;&#64;&#116;&#111;&#112;&#102;&#111;&#114;&#109;&#116;&#101;&#99;&#104;&#110;&#111;&#108;&#111;&#103;&#105;&#101;&#115;&#46;&#99;&#111;&#109;">
                                        &#105;&#110;&#102;&#111;&#64;&#116;&#111;&#112;&#102;&#111;&#114;&#109;&#116;&#101;&#99;&#104;&#110;&#111;&#108;&#111;&#103;&#105;&#101;&#115;&#46;&#99;&#111;&#109;
                                    </a>
                                    <a className="text-sm md:text-base hover:text-blue-600 transition-colors text-gray-800 truncate" href="mailto:&#115;&#97;&#108;&#101;&#115;&#64;&#116;&#111;&#112;&#102;&#111;&#114;&#109;&#116;&#101;&#99;&#104;&#110;&#111;&#108;&#111;&#103;&#105;&#101;&#115;&#46;&#99;&#111;&#109;">
                                        &#115;&#97;&#108;&#101;&#115;&#64;&#116;&#111;&#112;&#102;&#111;&#114;&#109;&#116;&#101;&#99;&#104;&#110;&#111;&#108;&#111;&#103;&#105;&#101;&#115;&#46;&#99;&#111;&#109;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full lg:w-6/14">
                    <div className="w-full bg-white  backdrop-blur-xl shadow-xl rounded-3xl p-8 md:p-12 border border-black/15">

                        <form action="" className="space-y-6" onSubmit={onSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="flex flex-col gap-2">
                                    <label className="text-blue-500 text-sm font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        className="rounded-xl bg-white border border-black/15 text-blue-500 placeholder-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                                    />
                                </div>


                                <div className="flex flex-col gap-2">
                                    <label className="text-blue-500 text-sm font-medium">

                                        Email Address
                                    </label>
                                    <input

                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="rounded-xl bg-white border border-black/15 text-blue-500 placeholder-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-blue-500 text-sm font-medium">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="+971 50 123 4567"
                                        className="rounded-xl bg-white border border-black/15 text-blue-500 placeholder-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                                    />
                                </div>


                                <div className="flex flex-col gap-2">
                                    <label className="text-blue-500 text-sm font-medium">
                                        Select Service
                                    </label>
                                    <select
                                        name="service"
                                        className="rounded-xl bg-white border border-black/15 text-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                                    >
                                        <option className="bg-white text-black/90">Select Service</option>
                                        <option className="bg-white text-black/90">ERP & Inventory Systems</option>
                                        <option className="bg-white text-black/90">Data Analytics Solutions</option>
                                        <option className="bg-white text-black/90">Automated Workflows</option>
                                    </select>
                                </div>

                            </div>


                            <div className="flex flex-col gap-2">
                                <label className="text-blue-500 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="rounded-xl bg-white border border-black/15 text-blue-500 placeholder-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none"
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
                        <span className="text-black mt-4 block text-center font-medium">{result}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;