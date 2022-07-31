import Image from "next/image";
import { AccountOptions } from "../../models/data";

import styles from "./accountOptions.module.css"

const AccountOptions = ({accountOptions}) =>{

    let accountTyped : AccountOptions = accountOptions;

    return(
        <div>
            
            <details>
                <summary>
                    <Image src="/usa.png" width='50' height='50'/>                    
                    USA
                </summary>
                <ol>
                    <li>654651231354</li>
                    <li>fd-456465465-hhd</li>
                </ol> 
            </details>
            <details>
                <summary>
                    <Image src="/europa.png" width='50' height='50'/>                    
                    EUROPA
                </summary>
                <ol>
                    <li>1112222335</li>
                </ol>
            </details>
            <details>
                <summary>
                    <Image src="/binance.png" width='50' height='50'/>                    
                    Binance
                </summary>
                <ol>
                    <li><Image src="/qr.png" width='100' height='100' /></li>
                </ol>
            </details>
        </div>
    )
}
export default AccountOptions;