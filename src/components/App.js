import React, {Component} from 'react';
import CompList from './CompList';
import { connect } from 'react-redux';
import CompActionButton from './CompActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';

import './App.css';

class App extends Component {

  onDragEnd = (result) => {
    //Reordering logic
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort (
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
        )
      );
  };

  render() {
    
    const { lists } = this.props;
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div>
            <h1>Potential Dashboard</h1>
            <div className="listsContainer">
              {/* Importing CompList component and data from reducer */}
              {lists.map(list => (           
                <CompList 
                  listID={list.id} 
                  key={list.id} 
                  title={list.title} 
                  cards={list.cards} 
                />
                ))}
                {/* Importing Add list button */}
                <CompActionButton list />
            </div>
          </div>
        </DragDropContext>
      );
  } 
}

//Mapping state from Reducers (Redux convention)
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps)(App);
