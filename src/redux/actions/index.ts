type IInit = {
    id: number,
    title: string,
    price: number,
    desc: string,
    img: string,
}
export const addItem = (product: IInit) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}
export const delItem = (product: IInit) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}

export const searchItem = (text: string) => {
    return { 
        type: "SEARCHITEM",
        payload: text
    }
}