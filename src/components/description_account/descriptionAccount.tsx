import { useContext } from 'react'
import { LanguageContext } from '../../context/languageContext'
import { IndexType } from '../../models/data'
import styles from '../../styles/Index.module.css'
import AccountOptions from '../accountOptions/accountOptions'
import Description from '../description/description'

const DescriptionAccount = () =>{

    const {getHomeData} = useContext(LanguageContext)

    const descriptionAccount : IndexType = getHomeData();
    
    return(
    <div className={styles.full_information}>
        <Description
        descriptionComponent={descriptionAccount.descriptionComponent}/>
        <AccountOptions
        accountOptions={descriptionAccount.accountOptions}/>
    </div>)
}

export default DescriptionAccount;


