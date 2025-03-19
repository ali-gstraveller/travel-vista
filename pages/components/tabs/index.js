import styles from './tabs.module.css';
import { useState } from 'react';

export default function Tabs() {

    const [activeButton, setActiveButton] = useState(null);
    const tabs = ['Overview', 'Amenities', 'Rooms', 'Accessibility','Policies','Guest Review (1)' ]
    return (
        <div className={styles.flexContainer} >
          <div className={styles.outerDiv}>
            <div className={styles.tabDiv} >
                  {tabs.map((item,id) => (
                    <button
                    key={id}
                    onClick={() => setActiveButton(id)}
                    className={`${styles.button} ${activeButton === id && styles.active }`}
                    >
                  {item}
                    </button>
                ))}
            </div>
          </div> 

        </div>
    )
}