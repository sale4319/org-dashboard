import React, {Component} from 'react';
import CompList from './CompList';
import { connect } from 'react-redux';
import CompActionButton from './CompActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';

import './App.css';

class App extends Component {

  onDragEnd = result => {
    //Reordering logic
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort (
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
        )
      );
  };

  render() {
    
    const { lists } = this.props;
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div>
            <h1>Potential Dashboard</h1>
            <Droppable droppableId="all-lists" direction="horizontal" type="list">
              {provided => (     
              <div 
                className="listsContainer" 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                >
                {/* Importing CompList component and data from reducer */}
                {lists.map((list, index) => (           
                  <CompList 
                    listID={list.id} 
                    key={list.id} 
                    title={list.title} 
                    cards={list.cards}
                    index={index} 
                  />
                  ))}
                  {provided.placeholder}
                  {/* Importing Add list button */}
                  <CompActionButton list />
              </div>
              )}
            </Droppable>
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
