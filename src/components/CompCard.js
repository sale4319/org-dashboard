import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const CompCard = ({text}) => {
    return(
        <Card style = {styles.cardContainer}>
          <CardContent>
          <Typography gutterBottom>
            {/* Passing data from listReducer */}
            {text}
          </Typography>
          </CardContent>
        </Card>
          
    )
};

//Temp CCS need to move it to external file
const styles = {
  cardContainer: {
    marginBottom: 8
  }
};
export default CompCard;