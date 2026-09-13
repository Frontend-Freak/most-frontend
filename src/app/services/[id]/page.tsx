import { URL } from "@/constants";
import { Plans } from "@/types/plan";
import type { Service } from "@/types/service";
import { notFound } from "next/navigation";

export default async function Service({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const [serviceRes, plansRes] = await Promise.all([
        fetch(`${URL}/services/${id}`),
        fetch(`${URL}/plans?serviceId=${id}`),
    ]);

    if (!serviceRes.ok) {
        notFound();
    }

    const service: Service = await serviceRes.json();
    const plans: Plans[] = await plansRes.json();
    console.log(service);

    return (
        <div className="container">
            <p>{service.name}</p>
            <ul>
                {plans.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.interval}</p>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
