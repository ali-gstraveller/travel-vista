import styles from './tabs.module.css';
import { useState } from 'react';

export default function Tabs() {

    const [active,setActive ] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const tabs = ['Overview', 'Amenities', 'Rooms', 'Accessibility','Policies','Guest Review (1)' ]
    return (
        <div className={styles.flexContainer} >
            { <div className={styles.tabDiv} >
                {/* <button onClick={() => setActive(true) } className={styles.button} style={{borderBottom:active? "0.277777778vh solid orange" :'none'      }}  class="tabLink" id="Overview" onclick="showCity('london',id)"> Overview </button>
                <button onClick={() => setActive(true) } className={`${styles.button}  ${  active && styles.active }`}     class="tabLink" id="Amenities" onclick="showCity('paris',id)"> Amenities </button>
                <button className={styles.button} class="tabLink" id="Rooms" onclick="showCity('new york',id)" > Rooms </button>
                <button className={styles.button} class="tabLink" id="Overview" onclick="showCity('london',id)"> Accessibility </button>
                <button className={styles.button} class="tabLink" id="Amenities" onclick="showCity('paris',id)"> Policies </button>
                <button className={styles.button} class="tabLink" id="Rooms" onclick="showCity('new york',id)" > Guest Review (1) </button> */}
{tabs.map((item,id) => (
        <button
          key={id}
          onClick={() => setActiveButton(id)}
          className={`${styles.button} ${activeButton === id && styles.active }`}
        >
        {item}
        </button>
      ))}

</div> }






            {/* {[1, 2, 3].map((id) => (
        <button
          key={id}
          onClick={() => setActiveButton(id)}
          className={`${styles.button} ${activeButton === id && styles.active }`}
        >
          Button {id}
        </button>
      ))} */}

        </div>
    )
}