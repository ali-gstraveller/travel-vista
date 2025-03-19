import styles from "./overview.module.css";

import Image from "next/image";

export default function Overview() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftPane}>
        <div className={styles.ImageSection}>
          <div className={styles.firstImage}>
            <Image
              className={styles.firstImageImage}
              quality={100}
              src="/holidayInn.png"
              width={4000}
              height={2000}
            />
            <div className={styles.iconDiv}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 5L14.58 6.42L12.99 4.83V16H11.01V4.83L9.42 6.42L8 5L12 1L16 5ZM20 10V21C20 22.1 19.1 23 18 23H6C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21V10C4 8.89 4.89 8 6 8H9V10H6V21H18V10H15V8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10Z"
                  fill="#FEBE43"
                />
              </svg>
            </div>
            <div className={styles.iconDiv2}>
              <svg
                className={styles.icon2}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.9"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0002 22L20.4402 13.31C21.4422 12.2748 22.0024 10.8906 22.0024 9.45C22.0024 8.00935 21.4422 6.62515 20.4402 5.59C19.9564 5.09167 19.3785 4.69448 18.7398 4.42152C18.1012 4.14856 17.4147 4.00528 16.7202 4C16.0255 4.00416 15.3387 4.14694 14.6999 4.41997C14.0611 4.693 13.4833 5.09078 13.0002 5.59L12.0002 6.6L11.0002 5.58C10.5159 5.08411 9.93725 4.69006 9.29841 4.42103C8.65957 4.15199 7.97338 4.0134 7.2802 4.0134C6.58702 4.0134 5.90084 4.15199 5.262 4.42103C4.62315 4.69006 4.04455 5.08411 3.5602 5.58C2.55824 6.61515 1.99805 7.99935 1.99805 9.44C1.99805 10.8806 2.55824 12.2648 3.5602 13.3L12.0002 22ZM12.0002 19.13L5.0002 11.92C4.35872 11.2578 4.00003 10.372 4.00003 9.45C4.00003 8.52803 4.35872 7.64222 5.0002 6.98C5.6002 6.36 6.4402 6 7.2802 6C8.1202 6 8.9702 6.36 9.5802 6.98L12.0002 9.48L14.4302 6.98C15.0302 6.36 15.8802 6 16.7202 6C17.5602 6 18.4002 6.36 19.0002 6.98C19.6417 7.64222 20.0004 8.52803 20.0004 9.45C20.0004 10.372 19.6417 11.2578 19.0002 11.92L12.0002 19.12V19.13Z"
                  fill="#006E5E"
                />
              </svg>
            </div>
          </div>
          <Image
            className={styles.secondImage}
            quality={100}
            src="/secondHotel.png"
            width={1024}
            height={683}
          />
          <Image
            className={styles.thirdImage}
            quality={100}
            src="/fourthImage.png"
            width={297}
            height={197}
          />
          {/* <Image className={styles.fourthImage } quality={100}  src='/thirdImage.png' width={1024} height={683} /> */}
          <Image
            className={styles.fourthImage}
            quality={100}
            src="/thirdImage.png"
            width={1024}
            height={683}
          />
          {/* <Image className={styles.fifthImage } quality={100}  src='/fifthImage.png' width={733} height={550} /> */}
          <Image
            className={styles.fifthImage}
            quality={100}
            src="/fifthImage.png"
            width={733}
            height={550}
          />
        </div>
        <div className={styles.hotelInfo}>
          <h1 className={styles.hotelName}>
            Holiday Inn Express Dubai Airport, an IHG Hotel 3.0 star property
          </h1>
          <button className={styles.roomSelectButton}>Select a room</button>
        </div>
        <p className={styles.hotelOneLiner}>
          Dubai hotel in Garhoud with free breakfast and airport shuttle service
        </p>
        {/* <p className={styles.ammenities}>
          {" "}
          <Image
            className={styles.tickIcon}
            src="/check-solid.svg"
            width={16}
            height={16}
          />{" "}
          Fully refundable{" "}
        </p> */}
        {/* <h1> left pane  </h1> */}

        {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
        <i     class="fa-solid fa-user"></i>  
      </div>

      {/* <div className={styles.rightPane}>

                 <h1> right pane  </h1>

            </div> */}
    </div>
  );
}
