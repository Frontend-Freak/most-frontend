import Link from "next/link";
import styles from "./Header.module.scss";
export default function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.container}>
                    <Link href={"/"} className={styles.logo}>
                        <svg
                            width="232"
                            height="214"
                            viewBox="0 0 232 214"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M57.6667 142.333C79.0217 142.333 96.3333 126.365 96.3333 106.667C96.3333 86.9685 79.0217 71 57.6667 71C36.3117 71 19 86.9685 19 106.667C19 126.365 36.3117 142.333 57.6667 142.333Z"
                                fill="#4FA69C"
                            />
                            <path
                                d="M173.667 142.333C195.022 142.333 212.333 126.365 212.333 106.667C212.333 86.9685 195.022 71 173.667 71C152.312 71 135 86.9685 135 106.667C135 126.365 152.312 142.333 173.667 142.333Z"
                                fill="#E2924F"
                            />
                            <path
                                d="M144.667 97.75H86.6667V115.583H144.667V97.75Z"
                                fill="#F2EAE0"
                            />
                        </svg>
                        <span>Мост</span>
                    </Link>
                    <ul className={styles.nav}>
                        <Link href={"services"} className={styles.item}>
                            Каталог
                        </Link>
                        <Link href={"/"} className={styles.item}>
                            Поддержка
                        </Link>
                    </ul>
                    <div className={styles.actions}>
                        <button className={styles.theme}>Сена темы</button>
                        <Link href={"/auth/login"} className={styles.login}>
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
