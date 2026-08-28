import { URL } from "@/constants";
import { Service } from "@/types/service";
import styles from "./page.module.scss";

export default async function Services() {
    const res = await fetch(`${URL}/services`);
    const services: Service[] = await res.json();

    return (
        <div className="container">
            <div className={styles.services}>
                <div className={styles.servicesContent}>
                    {services.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.itemLogo}></div>
                            <p className={styles.itemName}>{item.name}</p>
                            <p className={styles.itemDescription}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
