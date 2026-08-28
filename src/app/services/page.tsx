import { URL } from "@/constants";
import { Service } from "@/types/service";

export default async function Services() {
    const res = await fetch(`${URL}/services`);
    const services: Service[] = await res.json();

    return (
        <div>
            {services.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}
