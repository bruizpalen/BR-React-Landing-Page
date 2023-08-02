//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Navbar from "./component/navbar";
import Container from "./component/container";
import Jumbotron from "./component/jumbotron";
import Card from "./component/card";
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
                {}
                <div className="row m-2">
                    <div className="col-lg-3 col-12">
                        <Card
                        cardTitle={'First Card'}
                        cardText={'This is the text example 1'}
                        cardButtonLabel={'Button card1'}
                        />
                    </div>
                    <div className="col-lg-3 col-12">
                        <Card
                        cardTitle={'Second Card'}
                        cardText={'This is the text example 2'}
                        cardButtonLabel={'Button card2'}
                        />
                    </div>
                    <div className="col-lg-3 col-12">
                        <Card
                        cardTitle={'Third Card'}
                        cardText={'This is the text example 3'}
                        cardButtonLabel={'Button card3'}
                        />
                    </div>
                    <div className="col-lg-3 col-12">
                        <Card
                        cardTitle={'Forth Card'}
                        cardText={'This is the text example 4'}
                        cardButtonLabel={'Button card4'}
                        />
                    </div>
                    </div>
                    <Footer/>
                    {/* <Footer footerStyle={{height: '3rem', backgroundColor:'gray', justifyContent: 'center', alignItems: 'center'}}/> */}
                </Container>,
 document.querySelector("#app"));
