import React from 'react';
import CompCard from './CompCard';
import CompActionButton from './CompActionButton';
import { Droppable } from 'react-beautiful-dnd';

// Pass elements from reducers
const CompList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
            <div {...provided.droppableProps} 
                ref={provided.innerRef} 
                style={styles.container}
                >
                <h4>{title}</h4>
                {/* Importing CompCard component and data from reducer*/}
                {cards.map((card, index) => (
                    <CompCard 
                        key={card.id} 
                        index={index} 
                        text={card.text} 
                        id={card.id}
                    />
                ))}
                    <CompActionButton listID={listID}/>
                {provided.placeholder}
            </div>
            )}           
        </Droppable>
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