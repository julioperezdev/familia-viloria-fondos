import Head from "next/head";
import Header from "./header/header";

const Layout = ({children}) =>{
    return(
        <div>
            <Head>
                <title>Familia Viloria Fondos Pide tu aporte</title>
                <meta name="description" content="Web de Familia Viloria Fondos" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header/>
            <div>{children}</div>
        </div>
    )
}

export default Layout;