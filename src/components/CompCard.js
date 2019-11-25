import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

import CompEditDelete from './CompEditDelete';




const CompCard = ({ text, id, index }) => {

    return(
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
        <div 
            className="cardContainer"  
            ref={provided.innerRef} 
            {...provided.draggableProps} 
            {...provided.dragHandleProps}
        > 
          <Card>
            <CardContent>
            <Typography gutterBottom>
              {/* Passing data from listReducer */}
              {text}
              {/* Need to make Edit/Delete Component */}
              <CompEditDelete />
            </Typography>
            </CardContent>
          </Card>
        </div>
        )}
      </Draggable>    
    )
};

export default CompCard;