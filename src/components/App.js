import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';

import ComponentList from './ComponentList';
import ActionButton from './ActionButton';
import Navbar from './Navbar';

import './App.css';

class App extends Component {

  onDragEnd = result => {
    //Reordering logic
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
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
        <Navbar />
        <br />
        <div>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <div
                className="listsContainer"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* Importing ComponentList component and data from reducer */}
                {lists.map((list, index) => (
                  <ComponentList
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                    dispatch={this.props.dispatch}
                  />
                ))}
                {provided.placeholder}
                {/* Importing Add list button */}
                <ActionButton list />
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

export default connect(mapStateToProps)(App);
