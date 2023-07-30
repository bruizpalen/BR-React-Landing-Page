//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";
import Navbar from "./component/navbar";
import ContainerComponent from "./component/container";
import Jumbotron from "./component/jumbotron";
import CardComponent from "./component/card";
import FooterComponent from "./component/footer";
//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<ContainerComponent>

                <Navbar 
                    title='Start Boostrap' 
                    items={['Home', 'About', 'Services', 'Contact']}
                />

                <Jumbotron 
                    title='Hello, world!' 
                    description='This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.' 
                    secondDescription='It uses utility classes for typography and spacing to space content out within the larger container.'
                    buttonLabel='Learn more'
                    jumbotronStyle={{backgroundColor: 'grey', alignItems:'start', display: 'flex', flexDirection: 'column', padding: '5rem', margin: '1rem'}}
                />

                <ContainerComponent customStyle={{ padding: "20px", display:'flex', justifyContent: 'center'}} >
                    <div style={{ display: "flex", gap: "20px" }}>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    </div>
                </ContainerComponent>
                    <FooterComponent footerStyle={{height: '3rem', backgroundColor:'gray', justifyContent: 'center', alignItems: 'center'}}/>
                </ContainerComponent>,
 document.querySelector("#app"));
