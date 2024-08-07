import { DeleteProduct } from "../svg/Trash";

export const BtnDelete = ({onClick}) => {
    return(
        <button onClick={onClick}>
            <DeleteProduct fillColor="white"/>
        </button>
    )
}