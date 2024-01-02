"use client";

import { Button } from "@components/ui/button";
import React from "react";

const FoodAndGallery = () => {
	return (
		<section
			className="text-center -my-[15vh] w-screen min-h-screen h-full flex flex-col justify-between bg-cover bg-center bg-fixed px-3"
			style={{ backgroundImage: "url(/assets/food-gallery.jpg)" }}>
			<div className="h-[25vh] -mx-3 bg-white dark:bg-slate-950 w-screen"></div>
			<div className="flex space-y-8 lg:space-x-10 px-2 lg:space-y-32 lg:flex-row flex-col -mx-3 bg-slate-950/50 h-[50vh] justify-center items-center">
				<div className="bg-white dark:bg-slate-900 border border-border w-fit p-6 space-y-6 rounded-sm">
					<p className="text-xl font-medium">
						Memorable Settings for
						<span className="relative px-3 ms-2 z-10 text-white py-1 after:-z-10 after:-skew-x-12 after:absolute after:inset-0 after:bg-emerald-500">
							Delectable Dining
						</span>
					</p>
					<Button className="bg-transparent border-emerald-500 border hover:border-none duration-300 text-emerald-500 h-9 hover:bg-emerald-500 rounded-sm hover:text-white">
						Explore our Food
					</Button>
				</div>

				<div className="bg-white dark:bg-slate-900 border border-border w-fit p-6 space-y-6 rounded-sm">
					<p className="text-xl font-medium">
						View our Stunning
						<span className="relative px-3 ms-2 z-10 text-white py-1 after:-z-10 after:-skew-x-12 after:absolute after:inset-0 after:bg-emerald-500">
							Gallery
						</span>
					</p>
					<Button className="bg-transparent border-emerald-500 border hover:border-none duration-300 text-emerald-500 h-9 hover:bg-emerald-500 rounded-sm hover:text-white">
						Explore our Gallery
					</Button>
				</div>
			</div>
			<div className="h-[25vh] -mx-3 bg-white dark:bg-slate-950 w-screen"></div>
		</section>
	);
};

export default FoodAndGallery;
