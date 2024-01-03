import { Button } from "@components/ui/button";
import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const AboutYala = () => {
	return (
		<section className="mt-12 max-w-7xl space-y-10 md:flex">
			{/* map */}
			<div className="flex items-center justify-center w-full">
				<Image
					src={"/assets/map.png"}
					alt="lk image"
					width={0}
					height={0}
					sizes={"100vw"}
					className="w-full dark:invert h-full max-w-[400px] max-h-[500px]"
				/>
			</div>
			{/* content */}
			<div className="w-full justify-center md:flex md:flex-col">
				<h2 className="text-xl mb-5 font-medium lg:text-2xl">
					On The Outskirts of Yala National Park
				</h2>
				<div className="first-letter:text-7xl first-letter:font-medium first-letter:float-left">
					On The Outskirts of Yala National Park Beautifully positioned between the serene
					tranquility of the Indian Ocean and the natural wonders of Yala National Park, Hotel Yaala
					within an uncharted patch of coastal wilderness at the end of Sri Lanka's southern
					shoreline. With convenient accessibility to both the road and the sea, our home of Sri
					Lankan hospitality remains comfortably connected amidst the coastal wilds of our tropical
					island.
				</div>
				<Button
					className={`${raleway.className} mt-5 max-w-80 bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-semibold`}>
					View Map
				</Button>
			</div>
		</section>
	);
};

export default AboutYala;
