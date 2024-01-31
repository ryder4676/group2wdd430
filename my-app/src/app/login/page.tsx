import Header from "../ui/dashboard/header"
import Footer from "../ui/dashboard/footer"
import styles from './login.module.css'

export default function Login(){
    return (
        <>
        <Header/>
        <main className={styles.main}>
            <h1>Login / Sign Up</h1>
        <form className={styles.form}>
            <label className={styles.label}>Email
                <input className={styles.input} type="text" />
            </label>
            <label className={styles.label}>Password
                <input className={styles.input} type="text" />
            </label>
        </form>
        </main>
        <Footer/>
        </>
    )
}