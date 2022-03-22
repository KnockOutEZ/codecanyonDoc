import styles from "./Planet.module.css"

const Planet = () => {
    return ( 
        <div className="relative w-full flex h-48 justify-center items-center text-center border-b-2 mb-5 text-4xl font-bold">
           {/* <div className={`${styles.stars} z-50 absolute`}>
           <div className={styles.star1}>
              <div className={styles.pink}></div>
           </div>
           <div className={styles.star2}>
           <div className={styles.blue}></div>
           </div>
           <div className={styles.star3}>
           <div className={styles.blue}></div>
           </div>
           <div className={styles.star4}>
           <div className={styles.blue}></div>
           </div>
           <div className={styles.star5}>
           <div className={styles.blue}></div>
           </div>
           </div> */}
           
           {/* <div className="z-10 relative relative w-full"> */}
           <img src="/venusGif.gif" alt="venusGif"/>
           <p style ={{textShadow:"3px 3px 2px #FD6857"}} className="text-white absolute">Venus</p>
           {/* </div> */}
        </div>
     );
}
 
export default Planet;