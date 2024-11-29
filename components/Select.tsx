"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface SelectProps {
	placeholder: string;
	notFoundMessage: string;
	values: { value: string; label: string }[];
}

export function Select({ placeholder, notFoundMessage, values }: SelectProps) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between">
					{value ? values.find((v) => v.value === value)?.label : placeholder}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput
						placeholder={placeholder}
						className="h-9"
					/>
					<CommandList>
						<CommandEmpty>{notFoundMessage}</CommandEmpty>
						<CommandGroup>
							{values.map((v) => (
								<CommandItem
									key={v.value}
									value={v.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}>
									{v.label}
									<Check className={cn("ml-auto", value === v.value ? "opacity-100" : "opacity-0")} />
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
