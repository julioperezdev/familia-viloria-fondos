import Head from "next/head";
import Header from "./header/header";
import HeaderComponent from "./header/headerComponent"

const Layout = ({children}) =>{
    return(
        <div>
            <Head>
                <title>Familia Viloria Fondos</title>
                <meta name="description" content="Web de Familia Viloria Fondos" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header/>
            <div>{children}</div>
        </div>
    )
}

export default Layout;