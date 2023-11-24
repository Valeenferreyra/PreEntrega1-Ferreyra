import { BiCart } from "react-icons/bi";

export const CartWidget = () => {
    return (
        <div className="h-25">
            <BiCart size={27}/>
            <strong>3</strong>
        </div>
    )
}