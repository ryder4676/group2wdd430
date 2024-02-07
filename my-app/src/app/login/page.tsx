import Header from "../ui/dashboard/header"
import Footer from "../ui/dashboard/footer"
import styles from './login.module.css'

// next server actions... becasue event handlers don't work super great 
// with server side rendering
    async function handleLogin(data){
        'use server'
        const email = data.get('email');
        const password = data.get('password');
        console.log(email)
        console.log(password)
        // register / login user then add authorization 
        // for all things their account
    }

export default function Login(){

    return (
        <>
        <Header/>
        <main className={styles.main}>
        <form action={handleLogin} className={styles.form}>
            <label className={styles.label}>Email
                <input name="email" className={styles.input} type="email" />
            </label>
            <label className={styles.label}>Password
                <input name="password" className={styles.input} type="password" />
            </label>
            <button className={styles.button} type="submit">Login / Create An Account</button>
        </form>
        </main>
        <Footer/>
        </>
    )
}