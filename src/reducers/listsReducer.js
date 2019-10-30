const initialState = [
    {
    //Static mock data
    title: "Last Update",
    id: 0,
    cards: [
            {
                id: 0,
                text: "Setup Weback and Components"
            },
            {
                id: 1,
                text: "Introduce Reux"
            },
        ]
    },
    {
    title: "This Update",
    id: 1,
    cards: [
            {
                id: 0,
                text: "Added Redux state"
            },
            {
                id: 1,
                text: "Mapped Redux data"
            },
        ],
    },
    {
    title: "Next Update",
    id: 2,
    cards: [
            {
                id: 0,
                text: "Well see"
            },
            {
                id: 1,
                text: "What"
            },
            {
                id: 2,
                text: "Happerinos"
            },
        ],
    }   
];


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;