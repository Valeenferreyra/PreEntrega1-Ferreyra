const products = [
    { id: "1", name: "Zapatos", img: "url-img", price: 100, category: "calzados", description: "Zapato classic", stock: 10 },
    { id: "2", name: "Botas", img: "url-img", price: 100, category: "calzados", description: "Bota de cuero", stock: 10 },
    { id: "3", name: "Crocs/Ojotas", img: "url-img", price: 100, category: "calzados", description: "Crocs/ojotas", stock: 10 },
    { id: "4", name: "Zapatillas Nike", img: "url-img", price: 100, category: "calzados", description: "Air Jordan 1", stock: 10 },
    { id: "5", name: "Remeras", img: "url-img", price: 100, category: "ropa", description: "Oversize", stock: 10 },
    { id: "6", name: "Camisas", img: "url-img", price: 100, category: "ropa", description: "Camisa classic", stock: 10 },
    { id: "7", name: "Pantalones", img: "url-img", price: 100, category: "ropa", description: "Cargo Negro", stock: 10 },
    ];
    
    export const getProducts = () => {
        return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
            setTimeout(() => {
            resolve(products);
            }, 2000);
        } else {
            reject("No hay productos");
        }
        });
    };

    export const getProductById = (id) => {
        return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
            if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
            }
            resolve(product);
        }, 2000);
        } else {
        reject("No hay productos");
        }
    });
    };