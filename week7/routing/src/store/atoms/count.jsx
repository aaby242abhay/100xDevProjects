import { atom, selector } from "recoil";
export const countAtom = atom({
    key : "countAtom",                       //a unique way to identify the atom
    default : 0                             //initial value of the atom
})

export const evenSelector = selector({ 
    key : "evenSelector",
    get : ({get}) => {
        const count = get(countAtom);
        return count%2 == 0;
    }
})