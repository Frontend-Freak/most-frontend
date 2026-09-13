import { Service } from "@/types/service";

export interface Plans {
    id: number;
    name: string;
    description: string | null;
    price: number;
    interval: string;
    serviceId: number;
    service: Service[];
    createdAt: string;
}
