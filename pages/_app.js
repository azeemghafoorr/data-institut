// import React from "@types/react";

import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/slick-theme.css'
import '../public/assets/css/slick.css'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'
import GoogleFonts from '../components/GoogleFonts';
import JQueryScript from "../components/JQueryScript";
import BootstrapScript from "../components/BootstrapScript";
import IncludeScript from "../components/IncludeScript";
import SlickScript from "../components/SlickScript";
import CustomScript from "../components/CustomScript";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <GoogleFonts />
            <JQueryScript />
            <BootstrapScript />
            <IncludeScript />
            <SlickScript />
            <CustomScript />
            <Component {...pageProps} />

        </>
    );
}


export default MyApp;