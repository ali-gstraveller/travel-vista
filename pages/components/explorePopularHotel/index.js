import styles from './ExplorePopularHotel.module.css'
import Image from 'next/image'


export default function ExplorePopularHotel(){

    return (
<div className={styles.body}>
    <div className={styles.div1}>
            <h1 className={styles.heading}> Explore popular hotel  </h1>
        <div className={styles.paraDiv}>
            <p className={styles.paragraph}>  This can be detailed description or just a short text </p>
            <button className={styles.viewAllBtn}> View All  </button>
        </div>
    </div>

    <div className={styles.imageSection}>
    
        <div className={ `${styles.imageComponent} ${styles.firstImage}`}>
        <Image className={ styles.image1} width={337.5}  height={280} src='/hotel1.png' />
        <h1 className={styles.image1Heading}> Grand Maranga Ubud </h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}>Bali, Indonesia </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
        <div className={styles.imageComponent}>
        <Image className={styles.image1}  width={337.5}  height={280} src='/hotel2.png' />
        <h1 className={styles.image1Heading}> Royal Gremasha </h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}>London, England </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
        <div className={styles.imageComponent}>
        <Image className={styles.image1}  width={338}  height={280} src='/hotel3.png' />
        <h1 className={styles.image1Heading}> The Maansava</h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}>Paris, France </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
        <div className={styles.imageComponent}>
        <Image className={styles.image1}  width={337.5}  height={280} src='/hotel4.png' />
        <h1 className={styles.image1Heading}> Hurgasi Hotel </h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}>Rome, Italy </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
        <div className={styles.imageComponent}>
        <Image className={styles.image1}  width={337.5}  height={280} src='/hotel4.png' />
        <h1 className={styles.image1Heading}> Hurgasi Hotel </h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}> Rome, Italy </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
        <div className={styles.imageComponent}>
        <Image className={styles.image1}  width={337.5}  height={280} src='/hotel5.png' />
        <h1 className={styles.image1Heading}> The Victoria Group </h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}>Istanbul, Turkey </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
        <div className={styles.imageComponent}>
        <Image className={styles.image1}  width={338}  height={280} src='/hotel6.png' />
        <h1 className={styles.image1Heading}> Ritz Yokama Hotel</h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}>Tokyo, Japan </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
        <div className={styles.imageComponent}>
        <Image className={styles.image1}  width={337.5}  height={280} src='/hotel3.png' />
        <h1 className={styles.image1Heading}> The Maansava </h1>     
            <div className={styles.locationAndRating}>
                <p  className={styles.location}>Paris, France </p>
                <p className={styles.rating} > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51051 2.24626C9.87236 1.46838 10.9119 1.47814 11.2707 2.24626L13.2732 6.55564L17.7535 7.24891C18.5569 7.37258 18.8789 8.42388 18.2963 9.02602L15.0549 12.3785L15.8215 17.1142C15.9595 17.9703 15.1101 18.6082 14.3987 18.2111L10.3906 15.975L6.38259 18.2111C5.67114 18.6114 4.82172 17.9703 4.95971 17.1142L5.72636 12.3785L2.48497 9.02602C1.90232 8.42388 2.22431 7.37258 3.02776 7.24891L7.50803 6.55564L9.51051 2.24626Z" fill="#FDBC7D"/>
                    </svg>
                        4.8 
                </p>
            </div>
            <div className={styles.innerHeadingAndParagraph}>
                <h1 className={styles.innerHeading}> $240 </h1>
                <p className={styles.innerParagraph}>/night </p>
            </div>
        </div>
    </div>
</div>
    )

}