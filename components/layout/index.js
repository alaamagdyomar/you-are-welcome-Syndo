import { useRouter } from 'next/router'
import styles from './index.module.scss'

export default function Layout({ children }) {
    const router = useRouter()
    return (
        <div className={styles.main_layout_}>
            <div >
                <main>{children}</main>
            </div>
        </div>
    );
}
