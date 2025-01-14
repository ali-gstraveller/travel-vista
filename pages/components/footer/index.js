import styles from './Footer.module.css'

export default function Footer(){
    return (
<div className={styles.body}>
    <div className={styles.textBlock}>
        <h1 className={styles.heading}> Get Updated The Latest Newsletter </h1>
        <p className={styles.paragraph}> Sign up for our newsletter today and receive 10% OFF your first order </p>
    </div>
    <input className={styles.input} type='text' placeholder='Enter Your Email' />
    <div className={styles.subsDiv}>
        <p> Subscribe </p>
        <svg  className={styles.pcIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M21.0477 3.55293C18.8697 1.20736 2.48648 6.9532 2.50001 9.051C2.51535 11.4299 8.89809 12.1617 10.6672 12.6581C11.7311 12.9565 12.016 13.2625 12.2613 14.3781C13.3723 19.4305 13.9301 21.9435 15.2014 21.9996C17.2278 22.0892 23.1733 5.842 21.0477 3.55293Z" fill="#FEBE43" stroke="white" stroke-width="1.5"/>
            <path d="M11.5 13L15 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg  className={styles.mobileIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M21.0477 3.55293C18.8697 1.20736 2.48648 6.9532 2.50001 9.051C2.51535 11.4299 8.89809 12.1617 10.6672 12.6581C11.7311 12.9565 12.016 13.2625 12.2613 14.3781C13.3723 19.4305 13.9301 21.9435 15.2014 21.9996C17.2278 22.0892 23.1733 5.842 21.0477 3.55293Z" fill="#006E5E" stroke="white" stroke-width="1.5"/>
            <path d="M11.5 13L15 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    {/* <hr/> */}
</div>
    )
}