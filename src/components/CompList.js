import React from 'react';
import CompCard from './CompCard';
import CompActionButton from './CompActionButton';

// Pass elements from reducers
const CompList = ({title, cards}) => {
    return (
        <div style={styles.container}>
        <h4>{title}</h4>
        {/* Importing CompCard component and data from reducer*/}
        {cards.map(card => (
            <CompCard key={card.id} text={card.text} />
       ))}
            <CompActionButton />
        </div>
    )
};
//Temp CCS need to move it to external file
const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
};

export default CompList;