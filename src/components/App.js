import React, {Component} from 'react';
import CompList from './CompList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    
    const { lists } = this.props;
      return (
        <div className="App">
          <h1>Hello React!</h1>
          <div style={styles.listsContainer}>
            {/* Importing CompList component and data from reducer */}
            {lists.map(list => (           
              <CompList title={list.title} cards={list.cards} />
              ))}
          </div>
        </div>
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
