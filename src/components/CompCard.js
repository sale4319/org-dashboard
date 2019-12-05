import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

import CompEditDelete from './CompEditDelete';


const CompCard = ({ text, id, index ,listId,dispatch}) => {
   
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
            <CardContent  style={{display:'flex',flexDirection:'row'}}>
            <Typography gutterBottom style={{display:'flex',flex:1}}>
              {text}
            </Typography>
            <CompEditDelete cardId={id} listId={listId} dispatch={dispatch}/>
            </CardContent>
          </Card>
        </div>
        )}
      </Draggable>    
    )
};

export default CompCard;