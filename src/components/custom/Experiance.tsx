"use client";

import { Button } from "@components/ui/button";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Experiance = () => {
	return (
		<section className="my-16 max-w-4xl space-y-5 items-center flex flex-col">
			<h2 className="text-xl flex flex-col sm:flex-col gap-y-1 sm:gap-y-0 mb-5 font-medium text-center lg:text-2xl">
				Wild Nature Meets
				<span className="relative px-3 ms-2 text-white py-1 after:-z-10 after:-skew-x-12 after:absolute after:inset-0 after:bg-emerald-500">
					Island History
				</span>
			</h2>
			<div className="indent-10">
				From roaming the exciting habitats of Yala National Park with our resident naturalist, to
				stepping back in time at the ancient sites of Kataragama and Sithulpauwa, Hotel Yaala
				offers a world of unique Sri Lankan experiences of history, nature and everything in
				between, just waiting to be discovered.
			</div>
			<Button
				className={`${raleway.className} mt-8 max-w-80 bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-semibold`}>
				View Experiances
			</Button>
		</section>
	);
};

export default Experiance;
