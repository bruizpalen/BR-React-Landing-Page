import React from 'react';
import Card from "./card";


const Grid = () => {
    const cardsObjects = [
        {
            cardObjectId: 0,
            cardObjectTitle: 'First Card',
            cardObjectText: 'This is the text example 1',
            cardObjectButtonLabel:'Button card1'
        },

        {
            cardObjectId: 1,
            cardObjectTitle: 'Second Card',
            cardObjectText: 'This is the text example 2',
            cardObjectButtonLabel:'Button card2'
        },

        {
            cardObjectId: 2,
            cardObjectTitle: 'Third Card',
            cardObjectText: 'This is the text example 3',
            cardObjectButtonLabel:'Button card3'
        },

        {
            cardObjectId: 3,
            cardObjectTitle: 'Fourth Card',
            cardObjectText: 'This is the text example 4',
            cardObjectButtonLabel:'Button card4'
        }
    ]
    return (<div className="row m-2 g-5">
        {cardsObjects.map((element) =>(
                <div className="col-lg-3 col-12" key={element.cardObjectId}>
                    <Card
                    cardTitle={element.cardObjectTitle}
                    cardText={element.cardObjectText}
                    cardButtonLabel={element.cardObjectButtonLabel}
                    />
                </div>
            ))
        }
    </div>);

}

export default Grid