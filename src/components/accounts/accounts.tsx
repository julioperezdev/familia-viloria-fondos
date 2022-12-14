import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { AccountOptions } from "../../models/data";

import styles from "../../styles/accounts.module.css"

const Accounts = () => {

    const { getAccountsData } = useContext(LanguageContext)
    const accountTyped: AccountOptions = getAccountsData();

    return (
        <div className={styles.accounts_base}>
            <p className={styles.accounts_description}>{accountTyped.description}</p>
            <p className={styles.accounts_email}>{accountTyped.email}</p>
            <div className={styles.accounts_list}>
                <div>
                    <div className={styles.accounts_list_image_name}>
                        <img src="/usa.png" alt="bandera del pais donde se dona" />
                        <p>USA</p>
                    </div>
                    <div>
                        <div className={styles.accounts_list_method_information}>
                            <div className={styles.accounts_list_method_logo}>
                                <p>Zelle</p>
                                <img src="/zelle.png" alt="Zelle logo" />
                            </div>
                            <div className={styles.accounts_list_only_detail}>
                                <p>maritagg2v18@gmail.com</p>
                                <p>Mara G Garcia</p>
                            </div>
                        </div>
                        <div className={styles.accounts_list_method_information}>
                            <div className={styles.accounts_list_method_logo}>
                                <p>Venmo</p>
                                <img src="/venmo.png" alt="Venmo logo" />
                            </div>
                            <a className={styles.accounts_list_only_detail} href="https://venmo.com/code?user_id=2459183735635968451&created=1659389067.913167&printed=1">@Mara-Garcia-4</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.accounts_list_image_name}>
                        <img src="/espana.png" alt="bandera del pais donde se dona" />
                        <p>Espa??a</p>
                    </div>
                    <div>
                        <div className={styles.accounts_list_method_information}>
                            <div className={styles.accounts_list_method_logo}>
                                <p>Transferencia bancaria</p>
                                <img src="/bbva.png" alt="Pago Movil logo" />
                            </div>
                            <div className={styles.accounts_list_only_detail}>
                                <p>ES76 0182 5322 2702 0030 8089</p>
                                <p>Banco BBVA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.accounts_list_image_name}>
                        <img src="/binancePay.png" alt="bandera del pais donde se dona" />
                        <p>Binance</p>
                    </div>
                    <div>
                        <div className={styles.accounts_list_method_information}>
                            <div className={styles.accounts_list_method_logo}>
                                <p>Binance QR</p>
                                <img src="/tether.png" alt="Binance QR logo" />
                            </div>
                            <img className={styles.accounts_list_qr} src="/QR.png" alt="QR para transferir por binance" />
                        </div>
                        <div className={styles.accounts_list_method_information}>
                            <div className={styles.accounts_list_method_logo}>
                                <p>PayID</p>
                                <img src="/tether.png" alt="Binance Pay logo" />
                            </div>
                            <p className={styles.accounts_list_only_detail}>224069361</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.accounts_list_image_name}>
                        <img src="/venezuela.png" alt="bandera del pais donde se dona" />
                        <p>Venezuela</p>
                    </div>
                    <div>
                        <div className={styles.accounts_list_method_information}>
                            <div className={styles.accounts_list_method_logo}>
                                <p>Pago Movil</p>
                                <img src="/pagomovil.png" alt="Pago Movil logo" />
                            </div>
                            <div className={styles.accounts_list_only_detail}>
                                <p>CI 16164452</p>
                                <p>telefono 04148911483</p>
                                <p>Banco Provincial</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.accounts_list_image_name}>
                        <img src="/argentina.png" alt="bandera del pais donde se dona" />
                        <p>Argentina</p>
                    </div>
                    <div>
                        <div className={styles.accounts_list_method_information}>
                            <div className={styles.accounts_list_method_logo}>
                                <p>Transferencia</p>
                                <img src="/peso.png" alt="banco HSBC" />
                            </div>
                            <div className={styles.accounts_list_only_detail}>
                                <p>CBU: 0340310308310006737003</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accounts;