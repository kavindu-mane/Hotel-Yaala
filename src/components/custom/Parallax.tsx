"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Courgette } from "next/font/google";
import "../../styles/animations.css";

const courgette = Courgette({ weight: "400", subsets: ["latin"] });

const Parallax = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [text, setText] = React.useState<String>("Welcome");

	// use effect for parallax effect
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const parallaxWrapper: HTMLDivElement | null = ref.current;
		const parallaxBG = parallaxWrapper?.querySelectorAll("img");

		const t1 = gsap.timeline({
			scrollTrigger: {
				trigger: parallaxWrapper,
				start: "top top",
				scrub: true,
			},
		});

		parallaxBG?.forEach((bg) => {
			const bgSpeed: string | null = bg.getAttribute("data-speed");
			t1.to(
				bg,
				{
					y: -35 * Number(bgSpeed),
					duration: 2,
				},
				0
			);
		});
	}, []);

	// use effect for text animation
	useEffect(() => {
		const parallaxWrapper: HTMLDivElement | null = ref.current;
		const svgText = parallaxWrapper?.querySelector("text");

		//Implementing the setInterval method
		const interval = setInterval(() => {
			setText((prev) => (prev === "Welcome" ? "Ayubowan" : "Welcome"));
			svgText?.classList.remove("logo-animate");
		}, 6000);

		//Clearing the interval
		return () => {
			clearInterval(interval);
			svgText?.classList.add("logo-animate");
		};
	}, [text]);

	// Lenis - smooth scrolling
	const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	return (
		<section
			ref={ref}
			className="w-full relative h-screen pointer-events-none -z-10 bg-[#34a591] after:absolute after:inset-0 after:bg-slate-950/40">
			{[8, 6, 4, 2, 0].map((speed, key) => {
				return (
					<Image
						key={key}
						src={`/assets/layer-${5 - key}.svg`}
						width={0}
						height={0}
						sizes={"100vw"}
						data-speed={speed}
						alt={"img-" + key}
						className="w-full object-cover h-screen bg-no-repeat bg-cover bg-bottom absolute top-0 start-0"
					/>
				);
			})}
			{/* typing text */}
			<div className="z-10 absolute h-screen w-screen flex flex-col items-center justify-center">
				<svg
					viewBox="0 0 550 120"
					className="w-[550px] font-bold">
					<text
						x="50%"
						y="50%"
						dy="0.32em"
						textAnchor="middle"
						className={
							courgette.className +
							" logo-animate fill-transparent stroke-[2.2px] text-6xl leading-[-5px] lg:text-7xl xl:text-8xl"
						}>
						{text} !
					</text>
				</svg>
				<p className="text-white font-medium md:text-lg xl:text-xl">
					Wild Coastal Luxury In The Deep South
				</p>
			</div>
		</section>
	);
};

export default Parallax;
