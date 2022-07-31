import Head from "next/head";

import HeaderComponent from "../components/header/headerComponent";
import Layout from "../components/layout";

const QuienesSomos = () => {
    return(
        <Layout title='quien somos'>
            <h1>¿Quienes somos?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis inventore id aspernatur, reiciendis eius accusamus dolore ipsa architecto sed veritatis voluptates non soluta, saepe, exercitationem optio doloribus distinctio in accusantium voluptate. Ad, quae a possimus ullam alias velit esse tenetur nemo dolor, praesentium eum accusantium id recusandae eveniet. Minus.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, unde et. Blanditiis magni omnis doloribus reiciendis. Aliquam deleniti possimus quibusdam non ducimus tempora nostrum a laborum saepe at, quasi eveniet suscipit laudantium aut! Fuga adipisci odit odio maiores? Vero nobis repellat expedita minus, deserunt odio placeat unde sapiente, labore quaerat aperiam iusto perspiciatis, doloribus laudantium quasi accusantium saepe mollitia et?</p>
        </Layout>
        // <>
        // <Head>
        //     <title>¿Quienes somos?</title>
        //     <meta name="description" content="pagina explicando quien es la familia Viloria"/>
        // </Head>
        // <HeaderComponent/>
        // </>
    )
}

export default QuienesSomos;