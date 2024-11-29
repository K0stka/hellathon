"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { Button } from "./ui/button";
import { ReactNode } from "react";

interface Props {
	nameList: string[];
	//idList: string[];
	onEdit?: (id: number) => void;
	addInfo?: (id: number) => ReactNode;
	onCreate?: () => void;
	onDelete?: (id: number) => void;
}

function UserList({ nameList, onEdit, addInfo, onCreate, onDelete }: Props) {
	const [boolArray, setBoolArray] = useState<boolean[]>(Array(nameList.length).fill(false));

	const toggleItem = (index: number) => {
		setBoolArray((array) => array.map((value, i) => (i === index ? !value : value)));
	};

	const setAll = (value: boolean) => {
		setBoolArray(Array(nameList.length).fill(value));
	};

	const moreInfo = (index: number) => {
		boolArray[index] && (() => addInfo && addInfo(index));
	};

	const updatedList = nameList.map((listItem, index) => (
		<li key={listItem}>
			{listItem}
			<Button
				onClick={() => addInfo && toggleItem(index)}
				variant="secondary"
				className="ml-2">
				info
			</Button>

			<Button
				onClick={() => onEdit && onEdit(index)}
				variant="default"
				className="ml-2">
				Edit
			</Button>
			<Button
				onClick={() => onDelete && onDelete(index)}
				variant="destructive"
				className="ml-2">
				Delete
			</Button>

			<>{boolArray[index] && (() => addInfo && addInfo(index))}</>
		</li>
	));

	return (
		<div>
			{updatedList}
			<Button
				variant="default"
				onClick={() => onCreate && onCreate()}
				className="mt-4">
				+
			</Button>
		</div>
	);
}

export default UserList;
