import { CONSTANTS } from '../actions';

let listID = 4;
let cardID = 7;

const initialState = [
    {
    //Static mock data
    title: "Last Update",
    id: `list-${0}`,
    cards: [
            {
                id: `card-${0}`,
                text: "Added Redux state"
            },
            {
                id: `card-${1}`,
                text: "Mapped Redux data"
            },
        ]
    },
    {
    title: "This Update",
    id: `list-${1}`,
    cards: [
            {
                id: `card-${3}`,
                text: "Added Add Card/list button"
            },
            {
                id: `card-${4}`,
                text: "Added Add Card/list functionality"
            },
        ],
    },
    {
    title: "Next Update",
    id: `list-${2}`,
    cards: [
            {
                id: `card-${5}`,
                text: "Drag and drop card between lists"
            },
            {
                id: `card-${6}`,
                text: "Hopefully"
            },
            {
                id: `card-${7}`,
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
                id: `list-${listID}`
        }
            listID =+ 1;
            return [...state, newList];
        
        case CONSTANTS.ADD_CARD:
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
    
        default:
        return state;
    }
};

export default listsReducer;