"use client";
import { Modal } from "@/components/ui/model";

export default function SetupPage() {
	return (
		<div className="p-4">
			<Modal title="test" description="test" isOpen onClose={() => {}}>
				Children
			</Modal>
		</div>
	);
}
