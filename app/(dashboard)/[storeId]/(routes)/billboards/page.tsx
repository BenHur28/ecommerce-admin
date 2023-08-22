import { Button } from "@/components/ui/button";
import { BillboardClient } from "./components/client";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const BillboardsPage = () => {
	return (
		<div className="flex-col">
			<div className="flex- 1 space-y-4 p-8 pt-6">
				<BillboardClient />
				<Button>
					<Plus className="mr-2 h-4 w-4">Add New</Plus>
				</Button>
			</div>
			<Separator />
		</div>
	);
};

export default BillboardsPage;
