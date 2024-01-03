"use client";

import * as React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Home, Tent, Users } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@components/ui/button";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const roomDetails = [
	{
		title: "Deluxe Room",
		img: "deluxe-room.jpg",
		description:
			"The Deluxe Rooms are located on the ground floor of the hotel and are furnished with a king-size bed or twin beds. The rooms are spacious and comfortable with a private balcony or terrace overlooking the garden.",
		details: ["2 Adults", "Ocean View", "Private Balcony"],
	},
	{
		title: "Superior Room",
		img: "superior-room.jpg",
		description:
			"The Superior Rooms are located on the 2nd and 3rd floors of the hotel and are furnished with a king-size bed or twin beds. The rooms are spacious and comfortable with a private balcony or terrace overlooking the garden.",
		details: ["2 Adults", "Wildness View", "Private Balcony"],
	},
	{
		title: "Family Room",
		img: "family-room.jpg",
		description:
			"The Family Rooms are located on the 1st and 2nd floors of the hotel and are furnished with a king-size bed or twin beds. The rooms are spacious and comfortable with a private balcony or terrace overlooking the garden.",
		details: ["4 Adults", "Wildness View", "Private Terrace"],
	},
];

const RecommendedRooms = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section className="mb-16 max-w-7xl space-y-5 items-center flex flex-col">
			<h2 className="text-xl mb-5 flex flex-col sm:flex-col gap-y-1 sm:gap-y-0 font-medium text-center lg:text-2xl">
				Recommended Rooms
				<span className="relative px-3 ms-2 text-white py-1 after:-z-10 after:-skew-x-12 after:absolute after:inset-0 after:bg-emerald-500">
					For You
				</span>
			</h2>
			<div className="indent-10 max-w-4xl">
				All rooms luxury rooms and suites offer magnificent views of the golf course, the resort's
				tropical gardens or the calm waves of the Indian Ocean. Indigenous materials and
				contemporary style seamlessly blend with the luxurious interior comforts to create an
				elegant and private resort haven.
			</div>
			<Carousel
				opts={{
					align: "start",
				}}
				setApi={setApi}
				className="w-full pt-5">
				<CarouselContent>
					{roomDetails.map((data, index) => (
						<CarouselItem
							key={index}
							className="xl:basis-1/2 relative flex justify-center">
							<figure className="overflow-hidden rounded-md relative child:hover:scale-100">
								<img
									src={`/assets/${data?.img}`}
									height={0}
									width={0}
									sizes="100"
									className="w-full h-full scale-[1.15] duration-200 cursor-pointer"
									alt="room"
								/>

								<figcaption className="absolute group flex flex-col justify-between child:opacity-0 child:hover:opacity-100 inset-0 z-[1] after:absolute after:inset-0 after:opacity-0 after:hover:opacity-100 after:duration-300 after:bg-gradient-to-b after:from-slate-950/30 after:to-slate-950 after:z-[-1] px-5">
									<main className="duration-300 group-hover:translate-y-10 text-white">
										<p className="text-3xl font-medium">{data?.title}</p>
										<p className="mt-5">{data?.description}</p>
									</main>

									<footer className="duration-300 group-hover:-translate-y-10">
										<div className="flex w-full items-center justify-between">
											{data?.details.map((detail, index) => {
												return (
													<p
														className="flex flex-col items-center justify-center text-white text-sm"
														key={index}>
														<span className="">
															{index === 0 ? <Users /> : index === 1 ? <Tent /> : <Home />}
														</span>
														<span className="text-lg text-white font-medium">{detail}</span>
													</p>
												);
											})}
											<Button
												className={`${raleway.className} group-hover:scale-100 duration-300 transition delay-200 scale-0 child:hover:translate-x-2 rounded-none max-w-80 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold`}>
												More Details
												<span className="duration-300">
													<ArrowRight />
												</span>
											</Button>
										</div>
									</footer>
								</figcaption>
							</figure>
						</CarouselItem>
					))}
				</CarouselContent>

				<div className="absolute mt-10 flex justify-center w-full">
					<div className="relative">
						<CarouselPrevious className="border-none" />
						<span className="text-sm">
							{current} / {count}
						</span>
						<CarouselNext className="border-none" />
					</div>
				</div>
			</Carousel>
		</section>
	);
};

export default RecommendedRooms;
