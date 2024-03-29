import React from 'react';
import ComponentCard from './ComponentCard';
import ActionButton from './ActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// Pass elements from reducers
const ComponentList = ({ title, cards, listID, index, dispatch }) => {

    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div
                    className="container"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>
                                {/* Importing ComponentCard component and data from reducer*/}
                                {cards.map((card, index) => (
                                    <ComponentCard
                                        key={card.id}
                                        index={index}
                                        text={card.text}
                                        id={card.id}
                                        listId={listID}
                                        dispatch={dispatch}
                                    />
                                ))}
                                {provided.placeholder}
                                <ActionButton listID={listID} />
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>

    );
};


export default ComponentList;