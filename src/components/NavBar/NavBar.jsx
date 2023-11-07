import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {
    return (
        <nav className="d-flex justify-content-around p-4">
            <img src="/img/logoZapatillas.jpg" alt="" style={{width: "80px"}} />
            <div>
                <button className="btn btn-success mx-2">Home</button>
                <button className="btn btn-success mx-2">Productos</button>
                <button className="btn btn-success mx-2">Contacto</button>
            </div>

            <CartWidget/>
        
        </nav>
    )
}
