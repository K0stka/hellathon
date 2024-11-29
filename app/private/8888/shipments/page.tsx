import { AuthContext } from "@/auth/context";
import { AuthUser } from "@/lib/types";
import { useContext } from "react";
import { Placeholder } from "@/app/private/shared/page";
import { Shipment } from "@/lib/types";
import UserList from "@/components/UserList";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { NextPage } from "next";
import PageTemplate from "@/components/utility/PageTemplate";

const SomePage: NextPage = () => {
	return (
		<PageTemplate
			title="Zásilky"
			backPath="/shipments/add">
			<div>IDK</div>
		</PageTemplate>
	);
};

export default SomePage;
