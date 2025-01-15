import styles from  './paymentSection.module.css';
import Image from 'next/image';


export default function PaymentSection(){
    return (
        <div className={styles.paymentSectionDiv} >
            <p> Copyright 2025 Travel Vista. All Rights Reserved. </p>
            <div>
            <Image className={styles.paymentImage} src={'/paymentProviders.png'} width={167} height={22}          />
            </div>
        </div>
    )
}