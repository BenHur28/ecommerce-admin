import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const POST = async (
	req: Request,
	{ params }: { params: { storeId: string } }
) => {
	try {
		const { userId } = auth();
		const body = await req.json();

		const { label, imageUrl } = body;

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		if (!label) {
			return new NextResponse("Label is required", { status: 400 });
		}

		if (!imageUrl) {
			return new NextResponse("ImageUrl is required", { status: 400 });
		}

		if (!params.storeId) {
			return new NextResponse("Store id is required", { status: 400 });
		}

		const storeByUserId = await prismadb.store.findFirst({
			where: {
				id: params.storeId,
				userId: userId,
			},
		});

		if (!storeByUserId) {
			return new NextResponse("Unauthorized user", { status: 403 });
		}

		const billboard = await prismadb.billboard.create({
			data: {
				label,
				imageUrl,
				storeId: params.storeId,
			},
		});
		return NextResponse.json(billboard);
	} catch (error) {
		console.log("[BILLBOARD_POST]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
};

export const GET = async (
	req: Request,
	{ params }: { params: { storeId: string } }
) => {
	try {
		if (!params.storeId) {
			return new NextResponse("Store id is required", { status: 400 });
		}

		const billboards = await prismadb.billboard.findMany({
			where: {
				storeId: params.storeId,
			},
		});
		return NextResponse.json(billboards);
	} catch (error) {
		console.log("[BILLBOARD_GET]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
};
