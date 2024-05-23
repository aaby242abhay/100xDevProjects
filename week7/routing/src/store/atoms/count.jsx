import { atom } from "recoil";
export const countAtom = atom({
    key : "countAtom",                       //a unique way to identify the atom
    default : 0                             //initial value of the atom
})