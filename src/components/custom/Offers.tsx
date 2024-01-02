import { Button } from "@components/ui/button";
import Image from "next/image";
import React from "react";

const Offers = () => {
	return (
		<section>
			<h2 className="text-xl mb-5 font-medium text-center lg:text-3xl">
				Special
				<span className="relative px-3 ms-2 text-white py-1 after:-z-10 z-10 after:-skew-x-12 after:absolute after:inset-0 after:bg-emerald-500">
					Offers
				</span>
			</h2>

			<div className="my-10 md:rounded-r-full rounded-md overflow-hidden max-w-7xl items-center flex flex-col relative">
				<Image
					src={"/assets/offers.jpg"}
					alt="offers"
					width={0}
					height={0}
					sizes="100"
					className="w-screen h-[30rem] object-cover md:rounded-r-full rounded-md"
				/>
				<div className="absolute bottom-0 p-5 bg-gradient-to-b w-full max-w-lg dark:from-slate-950/40 dark:to-slate-950/95 from-white/20 to-white/80 md:start-0 md:top-0 md:flex md:flex-col md:justify-center md:w-1/2">
					<h2 className="font-medium text-xl md:text-2xl xl:text-3xl mb-2">Early Bird Offer</h2>
					<p className="">Book your stay 30 days in advance and get 15% off on your stay.</p>
					<div className="flex justify-end">
						<Button className="bg-emerald-600 mt-4 h-9 duration-300 hover:bg-emerald-700 rounded-sm text-white">
							Explore
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offers;
