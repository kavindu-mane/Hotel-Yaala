import AboutYala from "@components/custom/AboutYala";
import Booking from "@components/custom/Booking";
import Experiance from "@components/custom/Experiance";
import FoodAndGallery from "@components/custom/FoodAndGallery";
import Footer from "@components/custom/Footer";
import Offers from "@components/custom/Offers";
import Parallax from "@components/custom/Parallax";
import RecommendedRooms from "@components/custom/RecommendedRooms";

export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-between">
			<Parallax />
			<Booking />
			<div className="flex flex-col items-center px-3">
				<AboutYala />
				<Experiance />
				<RecommendedRooms />
			</div>
			<FoodAndGallery />
			<div className="flex flex-col items-center px-3">
				<Offers />
			</div>
			<Footer />
		</main>
	);
}
