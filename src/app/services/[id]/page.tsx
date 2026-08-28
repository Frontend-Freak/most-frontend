import { URL } from "@/constants";
import { notFound } from "next/navigation";

export default async function Service({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const res = await fetch(`${URL}/services/${id}`);

    if (!res.ok) {
        notFound();
    }

    const service = await res.json();

    return (
        <div className="container">
            <p>{service.name}</p>
        </div>
    );
}
