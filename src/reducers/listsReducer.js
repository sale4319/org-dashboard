import { CONSTANTS } from '../actions';
import uuid from 'uuid';

let listID = uuid();
let cardID = uuid();

const initialState = [
    {
    //Static mock data
    title: "Last Update",
    id: uuid(),
    cards: [
            {
                id: uuid(),
                text: "Added Redux state"
            },
            {
                id: uuid(),
                text: "Mapped Redux data"
            },
            {
                id: uuid(),
                text: "Added Add Card/list button"
            },
        ],
    },
    {
    title: "This Update",
    id: uuid(),
    cards: [
            {
                id: uuid(),
                text: "Added Add Card/list functionality"
            },
            {
                id: uuid(),
                text: "Drag and drop card between lists"
            },
            {
                id: uuid(),
                text: "Drag and drop card logic"
            },
        ],
    },
    {
    title: "Next Update",
    id: uuid(),
    cards: [
            
            {
                id: uuid(),
                text: "Login, Sign Up, Edit, Delete cards/lists, Navbar"
            },
            {
                id: uuid(),
                text: "Small backend, Styling"
            },
        ],
    }   
];


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST: 
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
        }
            listID =+ 1;
            return [...state, newList];
        
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`,

            }
            cardID += 1;
            
            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });

            return newState;
        }
        case CONSTANTS.DELETE_CARD: {
           const cardToDeleteId = action.payload.cardID;
             const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: list.cards.filter(card=> card.id!==cardToDeleteId)
                    };
                } else {
                    return list;
                }
            });
            return newState;
        }

            case CONSTANTS.DRAG_HAPPENED:
                //Import from listActions
                const  { 
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    type
                } = action.payload;

                
                const newState = [...state];

                // D&D lists
                if(type === "list") {

                    // Grab the list
                    const list = newState.splice(droppableIndexStart, 1);

                    // Drop the list to new position
                    newState.splice(droppableIndexEnd, 0, ...list);
                    return newState;
                }

                // Drag & Drop in the same list
                if(droppableIdStart === droppableIdEnd) {
                    // Find the list in which drag happened
                    const list = state.find(list => droppableIdStart === list.id);

                    // Pull the card from initial position on the list
                    const card = list.cards.splice(droppableIndexStart, 1)

                    // Put the card to new position on the list
                    list.cards.splice(droppableIndexEnd, 0, ...card)
                }

                //D&D to other lists
                if(droppableIdStart !== droppableIdEnd) {
                    // Find the list in which drag happened
                    const listStart = state.find(list => droppableIdStart === list.id);

                    // Pull out the cart from the list
                    const card = listStart.cards.splice(droppableIndexStart, 1);

                    // Find the list where drag ended
                    const listEnd = state.find(list => droppableIdEnd === list.id);

                    // Put the card in the new list
                    listEnd.cards.splice(droppableIndexEnd, 0, ...card)
                }

                return newState;
    
        default:
        return state;
    }
};

export default listsReducer;