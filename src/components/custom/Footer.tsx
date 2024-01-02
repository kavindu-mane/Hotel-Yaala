import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

const Footer = () => {
	return (
		<footer className="pt-5 pb-20 flex flex-col border-t-2 items-center border-border lg:flex-row w-full shadow-2xl">
			<h2 className="text-2xl text-center font-medium min-w-64 text-emerald-500">
				The Hotel Yaala
			</h2>
			<div className="flex space-x-16 xl:px-20 justify-around w-full md:flex-row flex-col mt-8 space-y-6 md:space-y-0 items-center">
				<div className="text-sm text-center">
					<p className="uppercase font-medium mb-5">Address</p>
					<p className="dark:text-gray-400 text-gray-700">The Hotel Yaala,</p>
					<p className="dark:text-gray-400 text-gray-700">Palatupana,</p>
					<p className="dark:text-gray-400 text-gray-700">Yala,</p>
					<p className="dark:text-gray-400 text-gray-700">Kirinda</p>
					<p className="dark:text-gray-400 text-gray-700">Sri Lanka</p>
				</div>
				<div className="text-sm text-center">
					<p className="uppercase font-medium mb-5">Operating hours (Reservations)</p>
					<p className="dark:text-gray-400 text-gray-700">Mon - Fri - 9am to 6pm,</p>
					<p className="dark:text-gray-400 text-gray-700">Mon - Fri - 9am to 6pm,</p>
					<p className="dark:text-gray-400 text-gray-700">Sat - 9am to 6pm,</p>
					<p className="dark:text-gray-400 text-gray-700">Sun - 9am to 2pm</p>
					<p className="dark:text-gray-400 text-gray-700">Public Holidays - 9am to 6pm</p>
				</div>
				<div className="text-sm text-center">
					<p className="uppercase font-medium mb-5">Find Us On</p>
					<div className="flex space-x-6">
						<Facebook />
						<Instagram />
						<Linkedin />
						<X />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
