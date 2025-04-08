"use client";
import Image from "next/image";
import { ArrowRight, Circle } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHeroSection } from "./use-hero-section.hook";
import { Button } from "../Button";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const { sliders, sendMessage, posting } = useHeroSection();

  const handleClick = async () => {
    const postResponse = await sendMessage({
      message: "Hello from the landing page",
    });
    alert(
      `The message "${postResponse.received.message}" was recieved successfully`
    );
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              id="hero-heading"
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Transform Your Digital Experience
            </h1>
            <p className="mt-6 text-md text-gray-600">
              Elevate your online presence with our cutting-edge platform. Built
              for the future, designed for today.
            </p>
            <div className="mt-10">
              <Button
                className="w-[150px] inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
                aria-label="Contact us on WhatsApp"
                onClick={handleClick}
                disabled={posting}
              >
                {posting ? (
                  <Circle className="ml-2 animate-spin" />
                ) : (
                  <div className="flex items-center px-3">
                    Get Started
                    <ArrowRight
                      className="ml-2 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </Button>
            </div>
          </div>

          <div aria-label="Image carousel" role="region">
            <Slider {...settings}>
              {sliders.map((item) => (
                <figure
                  key={item.id}
                  className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="object-cover"
                    priority
                  />
                </figure>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
