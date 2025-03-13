import styles from './overview.module.css';

import Image from 'next/image'

export default function Overview() {

    return (
        <div className={styles.outerContainer} >

          <div className={styles.leftPane}>
                <div className={styles.ImageSection}>
                    <Image className={styles.firstImage } quality={100}  src='/holidayInn.png' width={4000} height={2000} />
                    <Image className={styles.secondImage } quality={100}  src='/secondHotel.png' width={1024} height={683} />
                    <Image className={styles.thirdImage } quality={100}  src='/fourthImage.png' width={297} height={197} />
                    {/* <Image className={styles.fourthImage } quality={100}  src='/thirdImage.png' width={1024} height={683} /> */}
                    <Image className={styles.fourthImage } quality={100}  src='/thirdImage.png' width={1024} height={683} />
                    {/* <Image className={styles.fifthImage } quality={100}  src='/fifthImage.png' width={733} height={550} /> */}
                    <Image className={styles.fifthImage } quality={100}  src='/fifthImage.png' width={733} height={550} />
                </div>
                {/* <h1> left pane  </h1> */}
          </div>

          {/* <div className={styles.rightPane}>

                 <h1> right pane  </h1>

            </div> */}

        

        </div>
    )
}