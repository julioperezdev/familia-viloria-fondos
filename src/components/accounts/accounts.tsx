import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { AccountOptions } from "../../models/data";

import styles from "../../styles/accounts.module.css"

const Accounts = () =>{

    const {getAccountsData} = useContext(LanguageContext)
    const accountTyped : AccountOptions = getAccountsData();

    return(
        <div className={styles.accounts_base}>
            <p className={styles.accounts_description}>{accountTyped.description}</p>
            <p className={styles.accounts_email}>{accountTyped.email}</p>
            <div className={styles.accounts_list}>
                {/* {accountTyped.options.map(particularOption =>(
                    <>
                    <img src={particularOption.imageUrl}/>
                    <div>
                        {particularOption.accounts.map(particularAccount =>(
                            <>
                            <p>{particularAccount.text}</p>
                            <p>{particularAccount.number}</p>
                            </>
                        ))}
                    </div>
                    </>
                ))} */}
                <div>
                    <img src="/usa.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <div>
                    <img src="/espana.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <div>
                    <img src="/europa.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <div>
                    <img src="/argentina.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accounts;