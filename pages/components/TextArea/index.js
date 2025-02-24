import styles from './textArea.module.css'

export default function TextArea(){
    return(
<div className={styles.flexContainer} >
    <div className={styles.textArea}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="42" viewBox="0 0 100 42" fill="none">
            <path d="M25.0484 2.39272C25.0484 2.39272 19.0492 25.4786 17.678 32.8067C16.3067 40.1348 19.7486 35.0061 19.7486 35.0061C19.7486 35.0061 25.3893 24.6341 27.0088 26.0937C27.0088 26.0937 27.3023 26.4339 26.9181 27.7829C26.9181 27.7829 22.3453 41.7863 15.8733 41.5707C9.40121 41.3571 12.3427 30.6013 12.3427 30.6013L19.0118 2.39272C19.0118 2.39272 19.4787 0.468234 22.3887 0.713492C25.2967 0.960728 25.0484 2.39272 25.0484 2.39272Z" fill="#9E9E9E"/>
            <path d="M13.2422 26.7979C13.2422 26.7979 1.77766 31.1078 0.904863 28.9558C0.03207 26.8039 2.35886 24.6777 2.35886 24.6777C2.35886 24.6777 8.37384 17.9291 33.6454 5.32996C34.1813 5.06294 34.7803 5.24689 34.9852 5.74334C35.192 6.24572 34.9261 6.87864 34.3882 7.15554C30.1543 9.3332 13.1575 18.2475 3.74784 25.809C3.74784 25.809 1.55503 27.415 3.7774 27.2806C3.7774 27.2806 9.97363 26.9443 13.5613 25.4431L13.2422 26.7979Z" fill="#9E9E9E"/>
            <path d="M36.5696 2.19306L38.7428 3.4589C39.0146 3.69032 39.1427 4.05227 39.0875 4.434L38.3211 7.47006C38.1832 8.41747 39.3043 8.8526 40.0076 8.12474L45.0158 2.95059C45.9182 2.019 45.4749 0.600859 44.2711 0.567235L37.4542 0.381313C36.477 0.353622 35.8702 1.60167 36.5696 2.19306Z" fill="#9E9E9E"/>
            <path d="M28.5859 24.5747L30.832 13.2414H33.937L33.2868 16.4653L32.9933 15.5377C33.4976 14.6259 34.1537 13.987 34.9654 13.6211C35.7771 13.2552 36.7484 13.0732 37.8813 13.0732L37.2942 16.1073C37.1543 16.0935 37.0243 16.0836 36.906 16.0757C36.7878 16.0678 36.6637 16.0658 36.5396 16.0658C35.5742 16.0658 34.7881 16.3051 34.1793 16.7818C33.5705 17.2584 33.1627 18.0318 32.9519 19.0999L31.8604 24.5766H28.5859V24.5747Z" fill="#CCCCCC"/>
            <path d="M41.9113 24.7428C41.0444 24.7428 40.2386 24.543 39.4978 24.1415C38.757 23.742 38.162 23.1625 37.7148 22.403C37.2676 21.6454 37.043 20.7316 37.043 19.6636C37.043 18.7083 37.2006 17.8301 37.5158 17.031C37.831 16.23 38.2743 15.5357 38.8477 14.9463C39.421 14.3569 40.0849 13.8961 40.8415 13.5658C41.5961 13.2355 42.4078 13.0713 43.2747 13.0713C44.2125 13.0713 45.0163 13.2473 45.6881 13.5974C46.36 13.9495 46.8604 14.4934 47.1875 15.2292C47.5165 15.9669 47.6308 16.9183 47.5342 18.0833C47.4633 19.4183 47.1914 20.5873 46.7166 21.59C46.2418 22.5948 45.6015 23.3701 44.7976 23.918C43.9918 24.4699 43.0304 24.7428 41.9113 24.7428ZM42.92 22.0252C43.5643 22.0252 44.1337 21.867 44.6302 21.5505C45.1266 21.234 45.5187 20.7989 45.8064 20.2451C46.092 19.6913 46.2359 19.0406 46.2359 18.2969C46.2359 17.5255 46.0093 16.9143 45.5542 16.4634C45.0991 16.0144 44.4666 15.7889 43.6549 15.7889C43.0264 15.7889 42.459 15.9471 41.9546 16.2636C41.4503 16.5801 41.0562 17.0152 40.7686 17.569C40.4809 18.1248 40.3391 18.7735 40.3391 19.5172C40.3391 20.2906 40.5657 20.8998 41.0208 21.3507C41.4739 21.8017 42.1083 22.0252 42.92 22.0252ZM45.1641 24.5747L45.6054 22.3199L46.3403 18.9496L46.7816 15.5793L47.2426 13.2414H50.5171L48.2711 24.5747H45.1641Z" fill="#CCCCCC"/>
            <path d="M53.7228 24.5745L51.2266 13.2412H54.4577L56.5342 22.9942H54.8556L60.8352 13.2412H64.1076L57.0997 24.5745H53.7228Z" fill="#CCCCCC"/>
            <path d="M68.2648 24.7428C67.0886 24.7428 66.072 24.5332 65.211 24.1099C64.3501 23.6886 63.6822 23.0992 63.2073 22.3397C62.7325 21.5821 62.4941 20.6901 62.4941 19.6636C62.4941 18.3997 62.7778 17.2723 63.3433 16.2834C63.9087 15.2925 64.6929 14.5112 65.6937 13.9356C66.6946 13.3601 67.8452 13.0713 69.1455 13.0713C70.2508 13.0713 71.2024 13.279 71.9983 13.6923C72.7962 14.1077 73.4149 14.6833 73.8562 15.419C74.2975 16.1568 74.5162 17.037 74.5162 18.0635C74.5162 18.3582 74.4985 18.6529 74.463 18.9476C74.4276 19.2423 74.3822 19.5232 74.3271 19.7902H64.9904L65.3253 17.8736H72.7943L71.4506 18.463C71.5629 17.8301 71.5274 17.302 71.3462 16.8728C71.1649 16.4456 70.8714 16.1153 70.4655 15.8819C70.0597 15.6505 69.5711 15.5338 68.9958 15.5338C68.2825 15.5338 67.6777 15.7058 67.1812 16.05C66.6847 16.3941 66.3104 16.8688 66.0582 17.4721C65.806 18.0754 65.6799 18.7577 65.6799 19.5152C65.6799 20.3855 65.9223 21.0362 66.405 21.4635C66.8877 21.8927 67.6186 22.1063 68.5978 22.1063C69.1711 22.1063 69.7228 22.0153 70.2547 21.8333C70.7867 21.6514 71.2418 21.3903 71.6181 21.054L72.9814 23.2238C72.3234 23.744 71.5866 24.1257 70.767 24.371C69.9533 24.6202 69.1179 24.7428 68.2648 24.7428Z" fill="#CCCCCC"/>
            <path d="M74.8125 24.5746L77.9175 8.94336H81.19L78.085 24.5746H74.8125Z" fill="#CCCCCC"/>
            <path d="M83.5626 24.5745L81.0664 13.2412H84.2975L86.3741 22.9942H84.6955L90.675 13.2412H93.9475L86.9395 24.5745H83.5626Z" fill="#9E9E9E"/>
            <path d="M92.416 24.5747L94.662 13.2414H97.9148L95.6688 24.5747H92.416ZM96.843 11.6611C96.2697 11.6611 95.8067 11.4969 95.458 11.1666C95.1073 10.8363 94.9339 10.4328 94.9339 9.95615C94.9339 9.39443 95.1329 8.92766 95.5329 8.55581C95.9308 8.18397 96.4529 7.99805 97.0952 7.99805C97.6685 7.99805 98.1335 8.15628 98.4901 8.47274C98.8467 8.7892 99.026 9.17885 99.026 9.64167C99.026 10.2449 98.827 10.7335 98.429 11.1053C98.0291 11.4752 97.5011 11.6611 96.843 11.6611Z" fill="#9E9E9E"/>
        </svg>
        <p>
        Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures. Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures. 
        </p>
    </div>
    <div className={styles.quickLinks}>
            <h1>  Quick Links </h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Tour Guide</li>
                <li>Contact Us</li>
            </ul>
    </div>
    <div className={styles.supportSection}>
            <h1> Support </h1>
            <ul  >
                    <li>Help Center</li>
                    <li>Our COVID-19 Response</li>
                    <li>Cancellation options</li>
                    <li>Safety information</li>
            </ul>
    </div>
    <div className={styles.GetInTouchDiv} >
        <h1> Get In Touch </h1>
        <div className={styles.iconHolder}>
            <div className={styles.iconDiv}>
                    <svg className={styles.phone} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF4DE"/>
                    </svg>
                    <img 
                        className={styles.phone2}
                        src='/phone1.svg'
                    />
                    <p className={styles.paragraph} >+01 234 567 890</p>
                    <p className={styles.paragraph} >+09 876 543 210</p>
            </div>
            <div className={styles.iconDiv}>
                    <svg className={styles.phone} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF4DE"/>
                    </svg>
                    <img 
                        className={styles.phone2}
                        src='/envelope1.svg'
                    />
                    <p className={styles.paragraph} >info@travelvista.com</p>
                    <p className={styles.paragraph} >support@travelvista.com</p>
            </div>
            <div className={styles.iconDiv}>
                    <svg className={styles.phone} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF4DE"/>
                    </svg>
                    <img 
                        className={styles.phone2}
                        src='/location-dot1.svg'
                    />
                    <p className={styles.paragraph} >789 Inner Lane, Holy park, <br/>
                    California, USA
                    </p>
            </div>
        </div>
    </div>
</div>
    )
}