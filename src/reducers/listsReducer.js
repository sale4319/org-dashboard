import { CONSTANTS } from '../actions';

let listID = 9;
let cardID = 22;

const initialState = [
    {
    //Static mock data
    title: "Last Update",
    id: 0,
    cards: [
            {
                id: 0,
                text: "Added Redux state"
            },
            {
                id: 1,
                text: "Mapped Redux data"
            },
        ]
    },
    {
    title: "This Update",
    id: 1,
    cards: [
            {
                id: 3,
                text: "Added Add Card/list button"
            },
            {
                id: 4,
                text: "Added Add Card/list functionality"
            },
        ],
    },
    {
    title: "Next Update",
    id: 2,
    cards: [
            {
                id: 5,
                text: "Drag and drop card between lists"
            },
            {
                id: 6,
                text: "Hopefully"
            },
            {
                id: 7,
                text: "Mock"
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
                id: listID
        }
            listID =+ 1;
            return [...state, newList];
        
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID,

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
    
        default:
        return state;
    }
};

export default listsReducer;