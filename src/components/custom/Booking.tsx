"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { addDays, addMonths, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const formSchema = z.object({
	checkin: z.date().min(new Date(addDays(new Date(), -1)), {
		message: "Invalied date",
	}),
	checkout: z.date().min(new Date(), {
		message: "Invalied date",
	}),
	adults: z.string().min(1, {
		message: "Invalied value",
	}),
	child: z.string().min(1, {
		message: "Invalied value",
	}),
	coupon: z.string().min(0, {
		message: "Invalied value",
	}),
});

const Booking = () => {
	// form definition
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			checkin: new Date(),
			checkout: new Date(addDays(new Date(), 1)),
			adults: "1",
			child: "1",
			coupon: "",
		},
	});

	// submit
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<section className="mt-5 border w-[95%] md:w-auto border-border rounded-md p-4 sm:flex items-center sm:space-x-4 md:space-x-0 md:block">
			<div className="font-medium pb-5 min-w-[240px] w-full sm:text-center md:text-start sm:text-3xl md:text-lg">
				Book Your{" "}
				<span className="relative px-3 text-white py-1 after:-z-10 after:-skew-x-12 after:absolute after:inset-0 after:bg-emerald-500">
					Stay
				</span>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="xl:space-x-2 w-full flex flex-col xl:flex-row space-y-2 xl:space-y-0">
					{/* checkin */}
					<div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
						<FormField
							control={form.control}
							name="checkin"
							render={({ field }) => (
								<FormItem className="xl:w-60 w-full">
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"min-w-[240px] w-full pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}>
													{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0 border-border"
											align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date < new Date(addDays(new Date(), -1)) ||
													date > new Date(addMonths(new Date(), 1))
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* checkout */}
						<FormField
							control={form.control}
							name="checkout"
							render={({ field }) => (
								<FormItem className="xl:w-60 w-full">
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"min-w-[240px] w-full pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}>
													{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0 border-border"
											align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date < new Date() || date > new Date(addMonths(new Date(), 1))
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
						{/* adults */}
						<FormField
							control={form.control}
							name="adults"
							render={({ field }) => (
								<FormItem className="focus-visible:ring-0 md:w-40">
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Adults" />
											</SelectTrigger>
										</FormControl>
										<SelectContent
											className="border-border"
											onCloseAutoFocus={(e) => e.preventDefault()}>
											<SelectItem value="1">1</SelectItem>
											<SelectItem value="2">2</SelectItem>
											<SelectItem value="3">3</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* children */}
						<FormField
							control={form.control}
							name="child"
							render={({ field }) => (
								<FormItem className="focus-visible:ring-0 md:w-40">
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Children" />
											</SelectTrigger>
										</FormControl>
										<SelectContent
											className="border-border"
											onCloseAutoFocus={(e) => e.preventDefault()}>
											<SelectItem value="1">1</SelectItem>
											<SelectItem value="2">2</SelectItem>
											<SelectItem value="3">3</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* coupon code */}
						<FormField
							control={form.control}
							name="coupon"
							render={({ field }) => (
								<FormItem className="md:w-40">
									<FormControl>
										<Input
											className="focus-visible:ring-0 focus-visible:ring-offset-0"
											placeholder="Promo Code"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="bg-emerald-600 duration-300 hover:bg-emerald-700 rounded-sm text-white">
							Check Availability
						</Button>
					</div>
				</form>
			</Form>
		</section>
	);
};

export default Booking;
