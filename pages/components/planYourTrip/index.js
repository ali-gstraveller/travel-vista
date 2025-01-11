import Image from 'next/image';
import styles from './planYourTrip.module.css';

export default function PlanYourTrip() {

        return (

<div className={styles.planYourTrip}>
        <div className={styles.imageSection}>
                <Image unoptimized  className={styles.cool1} src='/cool1.png' width='250' height='500' />
                <Image unoptimized className={styles.cool2} src='/cool2.png' width='250' height='500' />
        </div>
        <div className={styles.textSection}>
                <h1 className={styles.firstHeading}> Let’s Go Together </h1>
                <h1 className={styles.secondHeading}> Plan Your Trip <br/> With us </h1>
                <p className={styles.firstParagraph}>
                        There are many variations of passages of available but the
                        majority have suffered alteration in some form, by injected hum
                        randomised words which don’t look even slightly. There are many
                        variations of passages of available but the majority have suffered
                        alteration in some form, by injected hum randomised words which
                        don’t look even slightly.
                </p>
                <div className={styles.divCompartment}>
                        <div className={styles.iconDiv}>
                                <svg className={styles.firstIcon} xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                                        <circle cx="42.5" cy="42.5" r="42.5" fill="#006E5E" />
                                </svg>
                                <svg  className={styles.secondIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                        <path d="M24.9584 14.7871C24.7015 15.0309 24.358 15.167 24.0005 15.167C23.6431 15.167 23.2996 15.0309 23.0427 14.7871C20.6893 12.5426 17.5357 10.0351 19.0737 6.39479C19.9052 4.42649 21.9013 3.16699 24.0005 3.16699C26.0997 3.16699 28.0957 4.42649 28.9273 6.39479C30.4633 10.0306 27.3175 12.5503 24.9584 14.7871Z" stroke="white" stroke-width="1.5" />
                                        <path d="M24 8.5H24.012" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66699 29.833C8.87613 29.833 10.667 28.0421 10.667 25.833C10.667 23.6239 8.87613 21.833 6.66699 21.833C4.45785 21.833 2.66699 23.6239 2.66699 25.833C2.66699 28.0421 4.45785 29.833 6.66699 29.833Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.6667 9.83301H12.6667C10.0893 9.83301 8 11.6239 8 13.833C8 16.0422 10.0893 17.833 12.6667 17.833H16.6667C19.244 17.833 21.3333 19.6238 21.3333 21.833C21.3333 24.0422 19.244 25.833 16.6667 25.833H14.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                        </div>
                        <h1 className={styles.dcFirstHeading}> 
                        Exclusive Trip
                        </h1>
                        <p className={styles.dcFirstParagraph} > There are many variations of passages of available but the majority.</p>
                </div>
                <div className={styles.divCompartment2}>
                        <div className={styles.iconDiv}>
                                <svg className={styles.firstIcon} xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                                        <circle cx="42.5" cy="42.5" r="42.5" fill="#006E5E" />
                                </svg>
                                <svg className={styles.secondIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                        <path d="M16.0003 29.833L13.3336 21.833H2.66699L5.33365 29.833H16.0003ZM16.0003 29.833H21.3336" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.9997 17.833V17.1663C15.9997 14.6522 15.9997 13.3951 15.2186 12.6141C14.4376 11.833 13.1805 11.833 10.6664 11.833C8.15219 11.833 6.89511 11.833 6.11407 12.6141C5.33301 13.3951 5.33301 14.6522 5.33301 17.1663V17.833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M25.3333 17.8337C25.3333 19.3065 24.1395 20.5003 22.6667 20.5003C21.1939 20.5003 20 19.3065 20 17.8337C20 16.3609 21.1939 15.167 22.6667 15.167C24.1395 15.167 25.3333 16.3609 25.3333 17.8337Z" stroke="white" stroke-width="1.5"/>
                                        <path d="M13.3333 5.83366C13.3333 7.30642 12.1394 8.50033 10.6667 8.50033C9.19391 8.50033 8 7.30642 8 5.83366C8 4.3609 9.19391 3.16699 10.6667 3.16699C12.1394 3.16699 13.3333 4.3609 13.3333 5.83366Z" stroke="white" stroke-width="1.5"/>
                                        <path d="M18.667 23.833H26.667C28.1398 23.833 29.3336 25.0269 29.3336 26.4997V27.1663C29.3336 28.6391 28.1398 29.833 26.667 29.833H25.3336" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                        </div>
                        <h1 className={styles.dcFirstHeading2} > 
                                Professional Guide
                        </h1>
                        <p className={styles.dcFirstParagraph2} > 
                                There are many variations of passages of available but the majority.
                        </p>
                </div>
        </div>
</div>
        )

}