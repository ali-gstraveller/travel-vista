import Image from "next/image"
import styles from './soloTravel.module.css'

export default function SoloTravel(){

return (
<div className={styles.soloTravel} > 
    <div className={styles.container}>  

        <p className={styles.text}> Solo travel <br/> Your first trip guide </p> 
        <p className={styles.paragraph} >
        First solo trip jitters? We've got you covered. Expert advice to help you plan, pack, and navigate your journey with ease.
        </p>
        <Image  unoptimized  className={styles.image} src='/soloTravel.png'  width={1440} height={300}  />

    </div>
</div>
)
}