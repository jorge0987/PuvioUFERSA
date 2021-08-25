import React from "react";
import Header from "../../components/Header/Container";
import Footer from "../../components/Footer/Container";

const PageTemplate: React.FC = (props) => {
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
}

export default PageTemplate;