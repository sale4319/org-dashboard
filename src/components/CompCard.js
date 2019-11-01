import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';


const CompCard = ({ text, id, index }) => {
    return(
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
        <div ref={provided.innerRef} 
            {...provided.draggableProps} 
            {...provided.dragHandleProps}
        > 
          <Card style = {styles.cardContainer}>
            <CardContent>
            <Typography gutterBottom>
              {/* Passing data from listReducer */}
              {text}
            </Typography>
            </CardContent>
          </Card>
        </div>
        )}
      </Draggable>    
    )
};

//Temp CCS need to move it to external file
const styles = {
  cardContainer: {
    marginBottom: 8
  }
};
export default CompCard;