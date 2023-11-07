import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () => {
    return (
        <div className="d-flex">
            <FaCartShopping color="red" size={27}/>
            <p className="mx-2">manuel</p>
        </div>
    )
}
