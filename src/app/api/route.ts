import { NextResponse } from "next/server";
import Ticket from "../(models)/tickets";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const ticketData = body.formData;
        await Ticket.create(ticketData);
        return NextResponse.json({ message: "Ticket created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create ticket" }, { status: 500 });
    }
}