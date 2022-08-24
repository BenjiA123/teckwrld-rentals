
import { FunctionComponent } from "react";
import styles from './footer.module.css'
const FooterComponent:FunctionComponent=() =>{

    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.row}>
                <h2>Social Media</h2>
                <h2>News letter</h2>
                <h2>description of teckwrld rentals</h2>
                <div className={styles.links}>
                    <div className="">
                        <h3>Header</h3>
                        test <br />                        
                        test <br />                        
                        test <br />
                    </div>
                    <div className="">
                        <h3>Header</h3>
                        test <br />                        
                        test <br />                        
                        test <br />
                    </div>
                    <div className="">
                        <h3>Header</h3>
                        test <br />                        
                        test <br />                        
                        test <br />
                    </div>
                    <div className="">
                        <h3>Header</h3>
                        test <br />                        
                        test <br />                        
                        test <br />
                    </div>
                </div>
                <h2>copywrite</h2>

            </div>
        </footer >
        
        </>
    )
}

export default FooterComponent