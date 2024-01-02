"use client";

import * as React from "react";
import Link from "next/link";
import { Courgette } from "next/font/google";
import { ChevronDown, Plus, Menu } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeSwitcher from "./ThemeSwitcher";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const accommodationList = ["Superior Room", "Deluxe Room", "Family Room"];
const diningList = ["The Resturent", "Thambapanni", "The Bar", "Pool Bar", "Segnature Dining"];

const courgette = Courgette({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
	const [isSideBarOpend, setIsSideBarOpend] = React.useState(false);
	const ref = React.useRef<HTMLElement>(null);

	// remove side bar when user click the outside of the sidebar
	React.useEffect(() => {
		function handleClickOutside(event: Event) {
			if (ref.current && !ref.current?.contains(event.target as Node) && isSideBarOpend) {
				setIsSideBarOpend(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, isSideBarOpend]);

	return (
		<React.Fragment>
			{/* navbar for large screens */}
			<nav className="flex absolute z-[1] items-center start-0 end-0 justify-between px-2 md:px-6 py-3 xl:px-20">
				{/* left side */}
				<Link
					href={"/"}
					className={courgette.className + " text-yellow-400 font-medium text-4xl"}>
					Yaala
				</Link>
				{/* right side */}
				<div className="flex items-center gap-x-5 text-white">
					{/* nav menu */}
					<NavigationMenu className="hidden md:block">
						<NavigationMenuList>
							{/* home */}
							<NavigationMenuItem>
								<Link
									href="/"
									legacyBehavior
									passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle() + " bg-transparent !rounded-full"}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							{/* location */}
							<NavigationMenuItem>
								<Link
									href="/location"
									legacyBehavior
									passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle() + " bg-transparent !rounded-full"}>
										Location
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							{/* accommodation */}
							<DropdownMenu>
								<DropdownMenuTrigger className="flex hover:text-slate-950 hover:dark:text-white items-center text-sm font-medium hover:bg-accent px-4 py-2 rounded-full">
									Accommodation
									<ChevronDown
										className="relative top-[1px] ml-1 h-3 w-3"
										aria-hidden="true"
									/>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									onCloseAutoFocus={(e) => e.preventDefault()}
									className="w-40 dark:border-slate-800">
									{accommodationList.map((title, key) => {
										return (
											<DropdownMenuItem key={key}>
												<Link href={"/"}>{title}</Link>
											</DropdownMenuItem>
										);
									})}
								</DropdownMenuContent>
							</DropdownMenu>
							{/* dining  */}
							<DropdownMenu>
								<DropdownMenuTrigger className="hover:text-slate-950 hover:dark:text-white flex items-center text-sm font-medium hover:bg-accent px-4 py-2 rounded-full">
									Dining
									<ChevronDown
										className="relative top-[1px] ml-1 h-3 w-3"
										aria-hidden="true"
									/>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									onCloseAutoFocus={(e) => e.preventDefault()}
									className="w-40 dark:border-slate-800">
									{diningList.map((title, key) => {
										return (
											<DropdownMenuItem key={key}>
												<Link href={"/"}>{title}</Link>
											</DropdownMenuItem>
										);
									})}
								</DropdownMenuContent>
							</DropdownMenu>
							{/* offers */}
							<NavigationMenuItem>
								<Link
									href="/offers"
									legacyBehavior
									passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle() + " bg-transparent !rounded-full"}>
										Offers
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							{/* gallery */}
							<NavigationMenuItem>
								<Link
									href="/gallery"
									legacyBehavior
									passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle() + " bg-transparent !rounded-full"}>
										Gallery
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					{/* theme button */}
					<ThemeSwitcher />
					{/* side bar button */}
					<button
						onClick={() => setIsSideBarOpend(true)}
						className="h-9 w-9 md:hidden flex border hover:text-slate-900 items-center border-border justify-center rounded-full hover:dark:bg-slate-800 hover:bg-slate-200">
						<Menu className="h-[1.2rem] w-[1.2rem]" />
					</button>
				</div>
			</nav>

			{/* sidebar for small screens */}
			<nav
				className={`w-72 flex flex-col bg-slate-50 items-end py-3 md:-right-72 px-1 h-screen absolute z-50 border-s border-border shadow-lg drop-shadow-xl dark:bg-slate-900 ${
					isSideBarOpend ? "right-0" : "-right-72"
				} duration-300`}
				ref={ref}>
				{/* side bar button */}
				<button
					onClick={() => setIsSideBarOpend(false)}
					className="h-9 w-9 md:hidden flex border items-center border-border justify-center rounded-full hover:dark:bg-slate-800 hover:bg-slate-200">
					<Plus className="h-[1.2rem] rotate-45 w-[1.2rem]" />
				</button>
				{/* links */}
				<div className="w-full mt-5 flex flex-col space-y-2">
					{/* home */}
					<Link
						href={"/"}
						className="px-2 text-sm font-medium hover:bg-border duration-200 py-2 w-full rounded-sm">
						Home
					</Link>
					{/* location */}
					<Link
						href={"/"}
						className="px-2 text-sm font-medium hover:bg-border duration-200 py-2 w-full rounded-sm">
						Location
					</Link>
					{/* accommodation */}
					<Accordion
						type="single"
						collapsible
						className="w-full px-2 text-sm font-medium">
						<AccordionItem
							value="Accommodation"
							className="border-none w-full">
							<AccordionTrigger className="hover:no-underline py-2">Accommodation</AccordionTrigger>
							{accommodationList.map((title, key) => {
								return (
									<AccordionContent
										className="py-0"
										key={key}>
										<Link
											href={"/"}
											className="px-2 flex text-sm font-medium hover:bg-border duration-200 py-2 w-full rounded-sm">
											{title}
										</Link>
									</AccordionContent>
								);
							})}
						</AccordionItem>
					</Accordion>
					{/* dining */}
					<Accordion
						type="single"
						collapsible
						className="w-full px-2 text-sm font-medium">
						<AccordionItem
							value="Dining"
							className="border-none w-full">
							<AccordionTrigger className="hover:no-underline py-2">Dining</AccordionTrigger>
							{diningList.map((title, key) => {
								return (
									<AccordionContent
										className="py-0"
										key={key}>
										<Link
											href={"/"}
											className="px-2 flex text-sm font-medium hover:bg-border duration-200 py-2 w-full rounded-sm">
											{title}
										</Link>
									</AccordionContent>
								);
							})}
						</AccordionItem>
					</Accordion>
					{/* offer */}
					<Link
						href={"/"}
						className="px-2 text-sm font-medium hover:bg-border duration-200 py-2 w-full rounded-sm">
						Offer
					</Link>
					{/* gallery */}
					<Link
						href={"/"}
						className="px-2 text-sm font-medium hover:bg-border duration-200 py-2 w-full rounded-sm">
						Gallery
					</Link>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
