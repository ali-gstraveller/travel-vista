import styles from './popularDestinations.module.css';
import Image from 'next/image';

export default function PopularDestinations() {

    return (

<div>
    <h1 className={styles.heading}> Explore stays in popular destinations </h1>
    <div className={styles.imageContainer}>

        <div className={styles.boxContainer}  >
            <span className={styles.iconContainer}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19.5" fill="white" fill-opacity="0.8" stroke="#E0E0E0" />
                </svg>
                <svg className={styles.icon2} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.4 12L16 16.6L14.6 18L8.6 12L14.6 6L16 7.4L11.4 12Z" fill="#5F6368" />
                </svg>
            </span>
            <Image className={styles.firstImage} src='/muree.png' width={337.5} height={250} />
            <h1 className={styles.placeName} >Skardu</h1>
            <p className={styles.placeLocation} >Gilgit-Baltistan, Pakistan</p>
        </div>

        <div className={styles.boxContainer}>

            <Image className={styles.firstImage} src='/bankok.png' width={337.5} height={250} />
            <h1 className={styles.placeNameForNextThree} > Bangkok </h1>
            <p className={styles.placeLocationForNextThree} >Bangkok Province, Thailand</p>

        </div>

        <div className={styles.boxContainer}>

            <Image className={styles.firstImage} src='/Antalya.png' width={337.5} height={250} />
            <h1 className={styles.placeNameForNextThree} > Antalya </h1>
            <p className={styles.placeLocationForNextThree} >Antalya Region, Türkiye </p>
        
        </div>

        <div className={styles.boxContainer}>

            <span className={styles.iconContainerLast}>
                <svg className={styles.iconLast} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19.5" fill="white" fill-opacity="0.8" stroke="#E0E0E0" />
                </svg>
                {/* <svg className={styles.icon2Last} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.4 12L16 16.6L14.6 18L8.6 12L14.6 6L16 7.4L11.4 12Z" fill="#5F6368" />
                </svg> */}
                <svg className={styles.icon2Last} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#5F6368" />
                </svg>
            </span>
            <Image className={styles.firstImage} src='/Naran.png' width={337.5} height={250} />
            <h1 className={styles.placeNameForNextThree} > Naran </h1>    
            <p className={styles.placeLocationForNextThree} > Khyber Pakhtunkhwa, Pakistan </p>
        
        </div>
    </div>
</div>

    )

}