//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Navbar from "./component/navbar";
import Container from "./component/container";
import Jumbotron from "./component/jumbotron";
import Grid from "./component/grid";
import Footer from "./component/footer";

ReactDOM.render(<Container>

                <Navbar 
                    title='Start Boostrap' 
                    items={['Home', 'About', 'Services', 'Contact']}
                />

                <Jumbotron 
                    title='Hello, world!' 
                    description='This is a simple hero unit, a simple jumbotron-style  for calling extra attention to featured content or information.' 
                    secondDescription='It uses utility classes for typography and spacing to space content out within the larger container.'
                    buttonLabel='Learn more'
                />
                <Grid/>
                    <Footer
                    footerText={'© 2020 Copyright'}/>
                   
                </Container>,
 document.querySelector("#app"));
