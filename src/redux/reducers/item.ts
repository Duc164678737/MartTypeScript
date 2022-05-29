export type IInit = {
    id: number,
    title: string,
    price: number,
    desc: string,
    img: string,
}

type Action = {
    type: "ADDITEM" | "DELETEITEM",
    payload: IInit,
}

const addItems = (state: IInit[] = [], action: Action) => {
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                action.payload
            ]
            
        case "DELETEITEM":
            return state = state.filter((item) => {
                return item.id !== action.payload.id;
            })
        default: return state;
    }
}

export default addItems