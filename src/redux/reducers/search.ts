
export const search: string = ''

type Action = {
    type: "SEARCHITEM",
    payload: string,
}
const searchItem = (state: string = '', action: Action) => {
    switch (action.type) {
        case "SEARCHITEM":
            return state= action.payload
        default: return state;
    }
}

export default searchItem;