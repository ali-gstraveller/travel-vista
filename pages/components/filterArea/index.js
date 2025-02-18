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
                        <span className={`${styles.slider} ${styles.round}`}> </span>
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
                    <div className={styles.neighbourhoodSection}>
                            <h1 className={styles.mainHeading}> Neighborhood </h1>
                        <form className={styles.form} >
                            <div className={styles.formItem}>
                                <input type="radio" id="nAny" name="guest_rating" value="nAny" /> 
                                <label for="nAny">Any</label>
                            </div>        
                            <div className={styles.formItem}>
                                <input type="radio" id="nWonderful_9+" name="guest_rating" value="nWonderful_9+" />
                                <label for="nWonderful_9+">Wonderful 9+
                                </label>
                            </div>
                            <div className={styles.formItem}>
                                <input type="radio" id="nVery good 8+" name="guest_rating" value="nVery good 8+" />
                                <label for="nVery good 8+">Very good 8+</label>
                            </div>
                            <div className={styles.formItem}>
                                <input type="radio" id="nVery good 7+" name="guest_rating" value="nVery good 7+" />
                                <label for="nVery good 7+">Very good 7+
                                </label>
                            </div>
                         </form> 
                    </div>
                </div>
            </div>
            <div className={styles.hotelList}>
                <div className={styles.InfoPane}>
                    <div className={styles.textArea}>
                        <p> Karachi: 199 properties found </p>
                        <p> How our sort order works </p>
                    </div>
                    <div className={styles.button}>
                        <p>Sort by</p>
                        <p>Recommended</p>
                    </div>
                </div>   
                <br/>
                <br/>
                <br/>
                <div className={styles.signInAlertBox} > 
                        <div>
                        <p>You'll always get our best prices when you're signed in!</p>
                        </div>
                    <div className={styles.signInButton}>
                        <p>Sign in</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                         <path d="M7.52875 21.6153C8.59125 20.827 9.74875 20.2044 11.0013 19.7475C12.2535 19.2908 13.5865 19.0625 15 19.0625C16.4135 19.0625 17.7465 19.2908 18.9988 19.7475C20.2513 20.2044 21.4088 20.827 22.4713 21.6153C23.2483 20.7611 23.8641 19.7724 24.3184 18.6491C24.7728 17.5257 25 16.3094 25 15C25 12.2292 24.026 9.86979 22.0781 7.92188C20.1302 5.97396 17.7708 5 15 5C12.2292 5 9.86979 5.97396 7.92188 7.92188C5.97396 9.86979 5 12.2292 5 15C5 16.3094 5.22719 17.5257 5.68156 18.6491C6.13594 19.7724 6.75167 20.7611 7.52875 21.6153ZM15.0003 15.9375C13.8591 15.9375 12.8967 15.5458 12.1131 14.7625C11.3294 13.979 10.9375 13.0166 10.9375 11.8753C10.9375 10.7341 11.3292 9.77167 12.1125 8.98812C12.896 8.20437 13.8584 7.8125 14.9997 7.8125C16.1409 7.8125 17.1033 8.20417 17.8869 8.9875C18.6706 9.77104 19.0625 10.7334 19.0625 11.8747C19.0625 13.0159 18.6708 13.9783 17.8875 14.7619C17.104 15.5456 16.1416 15.9375 15.0003 15.9375ZM15 26.875C13.351 26.875 11.8042 26.5649 10.3594 25.9447C8.91458 25.3245 7.65781 24.4799 6.58906 23.4109C5.5201 22.3422 4.67552 21.0854 4.05531 19.6406C3.4351 18.1958 3.125 16.649 3.125 15C3.125 13.351 3.4351 11.8042 4.05531 10.3594C4.67552 8.91458 5.5201 7.65781 6.58906 6.58906C7.65781 5.5201 8.91458 4.67552 10.3594 4.05531C11.8042 3.4351 13.351 3.125 15 3.125C16.649 3.125 18.1958 3.4351 19.6406 4.05531C21.0854 4.67552 22.3422 5.5201 23.4109 6.58906C24.4799 7.65781 25.3245 8.91458 25.9447 10.3594C26.5649 11.8042 26.875 13.351 26.875 15C26.875 16.649 26.5649 18.1958 25.9447 19.6406C25.3245 21.0854 24.4799 22.3422 23.4109 23.4109C22.3422 24.4799 21.0854 25.3245 19.6406 25.9447C18.1958 26.5649 16.649 26.875 15 26.875ZM15 25C16.1281 25 17.2158 24.8185 18.2631 24.4556C19.3104 24.0925 20.2403 23.5849 21.0528 22.9328C20.2403 22.3045 19.3225 21.8149 18.2994 21.4641C17.276 21.113 16.1763 20.9375 15 20.9375C13.8237 20.9375 12.722 21.1109 11.6947 21.4578C10.6674 21.8049 9.75156 22.2966 8.94719 22.9328C9.75969 23.5849 10.6896 24.0925 11.7369 24.4556C12.7842 24.8185 13.8719 25 15 25ZM15 14.0625C15.6219 14.0625 16.1419 13.8533 16.56 13.435C16.9783 13.0169 17.1875 12.4969 17.1875 11.875C17.1875 11.2531 16.9783 10.7331 16.56 10.315C16.1419 9.89667 15.6219 9.6875 15 9.6875C14.3781 9.6875 13.8581 9.89667 13.44 10.315C13.0217 10.7331 12.8125 11.2531 12.8125 11.875C12.8125 12.4969 13.0217 13.0169 13.44 13.435C13.8581 13.8533 14.3781 14.0625 15 14.0625Z" fill="#FEBE43"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.hotelOne}>               
                    <div className={styles.imageContainer}>
                            <Image className={styles.hotelPhoto} quality={100}  src={'/pchotel.png'} width={455}  height={335}   />
                            <div className={styles.svgContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="white" fill-opacity="0.8"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                     <path d="M12 20.3169L11.1025 19.5041C9.40467 17.9536 8.00183 16.6198 6.894 15.5026C5.786 14.3853 4.90608 13.3928 4.25425 12.5251C3.60225 11.6573 3.14692 10.8711 2.88825 10.1666C2.62942 9.46198 2.5 8.75272 2.5 8.03889C2.5 6.65139 2.96783 5.48981 3.9035 4.55414C4.83917 3.61831 5.99742 3.15039 7.37825 3.15039C8.28975 3.15039 9.14017 3.37489 9.9295 3.82389C10.7188 4.27272 11.409 4.92264 12 5.77364C12.6407 4.89797 13.3481 4.24181 14.1223 3.80514C14.8964 3.36864 15.7296 3.15039 16.6217 3.15039C18.0026 3.15039 19.1608 3.61831 20.0965 4.55414C21.0322 5.48981 21.5 6.65139 21.5 8.03889C21.5 8.75272 21.3706 9.46198 21.1117 10.1666C20.8531 10.8711 20.398 11.6568 19.7465 12.5236C19.0952 13.3905 18.2158 14.383 17.1085 15.5011C16.0012 16.6193 14.5975 17.9536 12.8975 19.5041L12 20.3169ZM12 18.6389C13.6413 17.1447 14.992 15.8641 16.052 14.7969C17.112 13.7297 17.9527 12.7981 18.5742 12.0021C19.1957 11.2061 19.6293 10.4987 19.875 9.87989C20.1207 9.26106 20.2435 8.64814 20.2435 8.04114C20.2435 6.99431 19.9012 6.12689 19.2167 5.43889C18.5321 4.75089 17.6683 4.40689 16.6255 4.40689C15.794 4.40689 15.0283 4.65122 14.3285 5.13989C13.6287 5.62856 13.0358 6.33764 12.55 7.26714H11.4397C10.9543 6.34231 10.3622 5.63439 9.6635 5.14339C8.96483 4.65239 8.20183 4.40689 7.3745 4.40689C6.338 4.40689 5.47592 4.75089 4.78825 5.43889C4.10042 6.12689 3.7565 6.99597 3.7565 8.04614C3.7565 8.65247 3.87967 9.26614 4.126 9.88714C4.3725 10.5083 4.805 11.2182 5.4235 12.0169C6.042 12.8157 6.88483 13.7462 7.952 14.8084C9.019 15.8706 10.3683 17.1474 12 18.6389Z" fill="#006E5E"/>
                                </svg>
                             </div>
                     </div>
                     <div className={styles.hotelInfo}>
                                <p className={styles.hotelName} >  Pearl Continental Hotel Karachi </p>
                                <p className={styles.location}> Karachi </p>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M2.25 20.7307V19.2115C2.82567 19.1795 3.27025 19.0113 3.58375 18.7068C3.89708 18.4023 4.482 18.25 5.3385 18.25C6.19483 18.25 6.80442 18.4167 7.16725 18.75C7.53008 19.0833 8.03075 19.25 8.66925 19.25C9.30775 19.25 9.80842 19.0833 10.1713 18.75C10.5341 18.4167 11.1437 18.25 12 18.25C12.8563 18.25 13.4692 18.4167 13.8385 18.75C14.2077 19.0833 14.7115 19.25 15.35 19.25C15.9885 19.25 16.4859 19.0833 16.8422 18.75C17.1988 18.4167 17.8052 18.25 18.6615 18.25C19.518 18.25 20.1029 18.4023 20.4163 18.7068C20.7298 19.0113 21.1743 19.1795 21.75 19.2115V20.7307C20.959 20.6922 20.3997 20.5192 20.072 20.2115C19.7445 19.9038 19.2743 19.75 18.6615 19.75C18.0487 19.75 17.5641 19.9167 17.2078 20.25C16.8512 20.5833 16.232 20.75 15.35 20.75C14.468 20.75 13.8423 20.5833 13.473 20.25C13.1038 19.9167 12.6128 19.75 12 19.75C11.3872 19.75 10.8993 19.9167 10.5365 20.25C10.1737 20.5833 9.55125 20.75 8.66925 20.75C7.78725 20.75 7.16483 20.5833 6.802 20.25C6.43917 19.9167 5.95133 19.75 5.3385 19.75C4.72567 19.75 4.2555 19.9038 3.928 20.2115C3.60033 20.5192 3.041 20.6922 2.25 20.7307ZM2.25 16.2308V14.7115C2.82567 14.6795 3.27025 14.5112 3.58375 14.2067C3.89708 13.9023 4.482 13.75 5.3385 13.75C6.19483 13.75 6.807 13.9167 7.175 14.25C7.543 14.5833 8.04108 14.75 8.66925 14.75C9.30775 14.75 9.80842 14.5833 10.1713 14.25C10.5341 13.9167 11.1437 13.75 12 13.75C12.8563 13.75 13.4659 13.9167 13.8288 14.25C14.1916 14.5833 14.6922 14.75 15.3307 14.75C15.9692 14.75 16.4699 14.5833 16.8328 14.25C17.1956 13.9167 17.8052 13.75 18.6615 13.75C19.518 13.75 20.1029 13.9023 20.4163 14.2067C20.7298 14.5112 21.1743 14.6795 21.75 14.7115V16.2308C20.959 16.1922 20.3997 16.0192 20.072 15.7115C19.7445 15.4038 19.2743 15.25 18.6615 15.25C18.0487 15.25 17.5717 15.4167 17.2308 15.75C16.8897 16.0833 16.2628 16.25 15.35 16.25C14.4577 16.25 13.8295 16.0833 13.4655 15.75C13.1013 15.4167 12.6128 15.25 12 15.25C11.3667 15.25 10.8814 15.4167 10.5442 15.75C10.2071 16.0833 9.58208 16.25 8.66925 16.25C7.75642 16.25 7.12625 16.0833 6.77875 15.75C6.43142 15.4167 5.95133 15.25 5.3385 15.25C4.72567 15.25 4.2555 15.4038 3.928 15.7115C3.60033 16.0192 3.041 16.1922 2.25 16.2308ZM7.34225 11.2845L10.6193 8.00775L9.35 6.7385C8.8065 6.19483 8.24242 5.806 7.65775 5.572C7.07308 5.33817 6.34358 5.21158 5.46925 5.19225V3.25C6.61675 3.26917 7.56675 3.4115 8.31925 3.677C9.07175 3.94233 9.81408 4.441 10.5463 5.173L16.6578 11.2845C16.4513 11.4295 16.2468 11.5433 16.0443 11.626C15.8416 11.7087 15.607 11.75 15.3405 11.75C14.8173 11.75 14.3599 11.5833 13.9682 11.25C13.5766 10.9167 12.9205 10.75 12 10.75C11.0795 10.75 10.4234 10.9167 10.0317 11.25C9.64008 11.5833 9.18267 11.75 8.6595 11.75C8.393 11.75 8.15842 11.7087 7.95575 11.626C7.75325 11.5433 7.54875 11.4295 7.34225 11.2845ZM16.5652 3.34625C17.2076 3.34625 17.7528 3.57283 18.201 4.026C18.649 4.47917 18.873 5.02175 18.873 5.65375C18.873 6.29608 18.649 6.84133 18.201 7.2895C17.7528 7.7375 17.2076 7.9615 16.5652 7.9615C15.9231 7.9615 15.3779 7.7375 14.9298 7.2895C14.4818 6.84133 14.2578 6.29608 14.2578 5.65375C14.2578 5.02175 14.4818 4.47917 14.9298 4.026C15.3779 3.57283 15.9231 3.34625 16.5652 3.34625Z" fill="#5F6368"/>
                                </svg>
                                <p className={styles.text} >Pool</p>
                                <p className={styles.roomType} > Quadruple Room </p><br/>
                                <p className={styles.bedTypes} >Multiple bed types</p>
                                <ul className={styles.impPoints} >
                                    <li>Free cancellation</li>
                                    <li>No prepayment needed - pay at the property</li>
                                </ul>
                                <p className={styles.ratingComment} >Good</p>
                                <p className={styles.totalReviews} >193 reviews</p>
                                <div className={styles.ratingBox}>
                                    <p className={styles.totalRating}>7.7</p>
                                </div>
                                <div className={styles.fareInformation}>
                                    <p className={styles.stayerType} >1 night, 2 adults, 1 child</p>
                                    <p className={styles.charges} > PKR 14,400 </p>
                                    <p className={styles.additionalSurcharge} > +PKR 2,160 taxes and charges </p>    
                                </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

