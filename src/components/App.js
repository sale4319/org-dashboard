import React, {Component} from 'react';
import CompList from './CompList';
import { connect } from 'react-redux';
import CompActionButton from './CompActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {

  onDragEnd = () => {
    //Reordering logic
  };

  render() {
    
    const { lists } = this.props;
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="App">
            <h1>Potential Dashboard</h1>
            <div style={styles.listsContainer}>
              {/* Importing CompList component and data from reducer */}
              {lists.map(list => (           
                <CompList 
                  listID={list.id} 
                  key={list.id} 
                  title={list.title} 
                  cards={list.cards} />
                ))}
                {/* Importing Add list button */}
                <CompActionButton list />
            </div>
          </div>
        </DragDropContext>
      );
  } 
}

//Temp CCS need to move it to external file
const styles ={
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  }
}

//Mapping state from Reducers (Redux convention)
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps)(App);
