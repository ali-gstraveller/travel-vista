import { useState } from 'react';
import styles from './filterArea.module.css';
import Image from 'next/image';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function FilterArea() {
    const [toggleState, setToggleState] = useState(true);
    const [value, setValue] = useState([0, 500]);

    const handleKeyDown = (event) => {
        if (event.key === "+" || event.key === "-" || event.key === ".") {
          event.preventDefault();
        }
      };

      const handleInput = (event) => {
        // Remove unwanted characters if pasted
        setValue(event.target.value.replace(/[+\-\.]/g, ""));
      };

    return (
        <div className={styles.body}>
            {/* <h1>hello</h1> */}
            <div className={styles.filterArea}>
                <div className={styles.filterBoxMobile}>
                   
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.7832 21V15.25H12.45V17.3H21V18.9668H12.45V21H10.7832ZM3 18.9668V17.3H9.11675V18.9668H3ZM7.45 14.8668V12.8333H3V11.1667H7.45V9.1H9.11675V14.8668H7.45ZM10.7832 12.8333V11.1667H21V12.8333H10.7832ZM14.8833 8.75V3H16.55V5.03325H21V6.7H16.55V8.75H14.8833ZM3 6.7V5.03325H13.2168V6.7H3Z" fill="#424242"/>
                        </svg>
                    
                    <p> Filter </p>
                </div>
                <div className={styles.sortByRecommended}>
                    <p>Sort by</p>
                    <p> Recommended </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M8.50014 9.16995L11.7585 5.91162L12.5049 6.65803L8.50014 10.6628L4.4954 6.65803L5.24181 5.91162L8.50014 9.16995Z" fill="#757575"/>
                    </svg>
                </div>
                <div className={styles.mapSection}>
                    <Image className={styles.mapImage} src='/map.png' width="345" height="150" />
                    <p className={styles.mapParagraph} > View in a map </p>
                </div>
                <div className={styles.compareProperties} >
                    <p> Compare properties  </p>
                    <label className={styles.switch}>
                        <input type="radio" onClick={() => setToggleState(!toggleState)} checked={toggleState} />
                        <span className={`${styles.slider} ${styles.round}`}  >     </span>
                    </label>
                </div >
                <p className={styles.searchText}> Search by property name </p>
                <div className={styles.searchInput}>
                    <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M24.4287 25.7208L16.5777 17.8695C15.9527 18.3856 15.234 18.7894 14.4215 19.0811C13.609 19.3728 12.7685 19.5186 11.8999 19.5186C9.76346 19.5186 7.95534 18.7789 6.47555 17.2995C4.99576 15.8202 4.25586 14.0124 4.25586 11.8764C4.25586 9.74057 4.99555 7.93224 6.47492 6.45141C7.9543 4.97078 9.762 4.23047 11.898 4.23047C14.0339 4.23047 15.8422 4.97036 17.323 6.45016C18.8037 7.92995 19.544 9.73807 19.544 11.8745C19.544 12.7672 19.3942 13.6198 19.0946 14.4323C18.7948 15.2448 18.3949 15.9515 17.8949 16.5523L25.7459 24.4033L24.4287 25.7208ZM11.8999 17.6439C13.5105 17.6439 14.8747 17.0849 15.9924 15.967C17.1103 14.8493 17.6693 13.4852 17.6693 11.8745C17.6693 10.2639 17.1103 8.89974 15.9924 7.78203C14.8747 6.66411 13.5105 6.10516 11.8999 6.10516C10.2893 6.10516 8.92513 6.66411 7.80742 7.78203C6.68951 8.89974 6.13055 10.2639 6.13055 11.8745C6.13055 13.4852 6.68951 14.8493 7.80742 15.967C8.92513 17.0849 10.2893 17.6439 11.8999 17.6439Z" fill="#424242" />
                    </svg>
                    <input placeholder='e.g. Marriott' />
                </div>
                <div className={styles.filterSection}>
                    <h1 className={styles.mainHeading}> Filter by </h1>
                        <div className={styles.hr}>
                        </div>
                    <h1 className={styles.popularFilters} > Popular filters </h1>
                    <form className={styles.form} >
                        <div className={styles.formItem}>
                            <input type="checkbox" id="5 stars" name="fav_language" value="5 stars" />
                            <label for="5 stars"> 5 stars</label>
                        </div>
                        <div className={styles.formItem}>
                            <input type="checkbox" id="Breakfast included" name="fav_language" value="Breakfast included" /> 
                            <label for="Breakfast included"> Breakfast included </label>
                        </div>
                        <div className={styles.formItem}>
                            <input type="checkbox" id="Hotel" name="fav_language" value="Hotel" />
                            <label for="Hotel">Hotel</label> 
                        </div>
                        <div className={styles.formItem}>
                            <input type="checkbox" id="Wonderful 9+" name="fav_language" value="Wonderful 9+" />
                            <label for="Wonderful 9+">Wonderful 9+ <br /> </label>
                        </div>
                        <div className={styles.formItem}>
                            <input type="checkbox" id="Clifton" name="fav_language" value="Clifton" />
                            <label for="Clifton">Clifton</label>
                        </div>
                    </form>
                    <h1 className={styles.starRating}>Star rating</h1>
                    <form className={styles.form2} >
                        <div className={styles.formItem}>
                            <input type="checkbox" id="html" name="fav_language" value="HTML" /> 
                            <label for="html">5</label>
                        </div>        
                        <div className={styles.formItem}>
                            <input type="checkbox" id="css" name="fav_language" value="CSS" />
                            <label for="css">4 </label>
                        </div>
                        <div className={styles.formItem}>
                            <input type="checkbox" id="javascript" name="fav_language" value="JavaScript" />
                            <label for="javascript">3</label>
                        </div>
                    </form>
                    <div className={styles.PriceSection} >
                        <h1 className={styles.Price} >  Price  </h1>
                        <div className={styles.minBox} >
                            <p className={styles.min} > Min </p> <br />
                            <form>
                                <label>$</label>
                                <input type='number' min="1" max="500" onKeyDown={handleKeyDown} onInput={handleInput} value={value[0]} placeholder='0' onChange={(e) => { setValue([ e.target.value , value[1]  ]) }}     />
                            </form>
                        </div>
                        <div className={styles.maxBox} >
                            <p className={styles.max} > Max </p> <br />
                            <form>
                                <label>$</label>    
                                <input type='number' min="1" max="500" value={value[1]} placeholder='500' onChange={(e) => { setValue([ value[0] ,  e.target.value ]) }}  />
                            </form> 
                        </div>
                        <div className="title">
                            <RangeSlider id="original-range"  className="original-range" value={value} step={1} min={0} max={500} onInput={(input) => { setValue(input) }} />
                        </div>
                    </div>
                    <div className={styles.guestRating}>
                            <h1 className={styles.mainHeading}> Guest rating </h1>
                        <form className={styles.form} >
                            <div className={styles.formItem}>
                                <input type="radio" id="Any" name="guest_rating" value="Any" /> 
                                <label for="Any">Any</label>
                            </div>        
                            <div className={styles.formItem}>
                                <input type="radio" id="Wonderful_9+" name="guest_rating" value="Wonderful_9+" />
                                <label for="Wonderful_9+">Wonderful 9+
                                </label>
                            </div>
                            <div className={styles.formItem}>
                                <input type="radio" id="Very good 8+" name="guest_rating" value="Very good 8+" />
                                <label for="Very good 8+">Very good 8+</label>
                            </div>
                            <div className={styles.formItem}>
                                <input type="radio" id="Very good 7+" name="guest_rating" value="Very good 7+" />
                                <label for="Very good 7+">Very good 7+
                                </label>
                            </div>
                         </form> 
                    </div>
                </div>
            </div>
            {/* <div className={styles.hotelList}>
        <p>
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
        </p>
        <p>
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page 
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
        distribution of letters, as opposed to using 'Content here, content here', making it look like 
        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes 
        on purpose (injected humour and the like).
        </p>
        <p>
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first 
        line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
        in their exact original form, accompanied by English versions from the 1914 translation by H. 
        Rackham.
        </p>
        <p>
        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look 
        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be 
        sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
        generators on the Internet tend to repeat predefined chunks as necessary, making this the 
        first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.
        </p>
        <p>
                    What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
        </p>
        <p>


        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page 
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
        distribution of letters, as opposed to using 'Content here, content here', making it look like 
        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes 
        on purpose (injected humour and the like).
        </p>
        <p>
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first 
        line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
        in their exact original form, accompanied by English versions from the 1914 translation by H. 
        Rackham.
        </p>
        <p>
        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look 
        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be 
        sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
        generators on the Internet tend to repeat predefined chunks as necessary, making this the 
        first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.
                    </p>
                    <p>
                    What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
        </p>
        <p>

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page 
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
        distribution of letters, as opposed to using 'Content here, content here', making it look like 
        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes 
        on purpose (injected humour and the like).
        </p>
        <p>
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first 
        line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
        in their exact original form, accompanied by English versions from the 1914 translation by H. 
        Rackham.
        </p>
        <p>
        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look 
        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be 
        sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
        generators on the Internet tend to repeat predefined chunks as necessary, making this the 
        first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.
                    </p>
                    <p>
                    What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
        </p>
        <p>

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page 
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
        distribution of letters, as opposed to using 'Content here, content here', making it look like 
        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes 
        on purpose (injected humour and the like).
        </p>
        <p>
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first 
        line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
        in their exact original form, accompanied by English versions from the 1914 translation by H. 
        Rackham.
        </p>
        <p>
        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look 
        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be 
        sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
        generators on the Internet tend to repeat predefined chunks as necessary, making this the 
        first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.
        </p>
    </div> */}
        </div>
    )
}

