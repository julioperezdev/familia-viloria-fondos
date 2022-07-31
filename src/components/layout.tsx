import Head from "next/head";
import HeaderComponent from "./header/headerComponent"

const Layout = ({children, title}) =>{
    return(
        <div>
            <Head>
                <title>Familia Viloria Fondos</title>
                <meta name="description" content="Web de Familia Viloria Fondos" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <HeaderComponent/>
            <div>{children}</div>
        </div>
    )
}

export default Layout;