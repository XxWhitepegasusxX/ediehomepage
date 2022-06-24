import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document{
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}