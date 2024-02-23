import { useTitle } from "../hooks/useTitle"


export const Cart = ({ title }) => {
    useTitle(title)
    const products = [{
        id: 1,
        name: 'Sony Wh-Ch510 Bluetooth Wireless',
        price: 149,
        image: "/assets/images/1001.png"


    },
    {
        id: 2,
        name: 'boAt Rockerz 450',
        price: 49,
        image: "/assets/images/1002.png"
    }]
    return (
        <div>
            <section className="text-center mt-8 font-bold text-2xl">Cart items: {products.length}</section>
            {products.map((product) => (
                <div className="max-h-full ml-32 mr-32 border rounded-sm shadow-lg mt-10">
                    <div className="flex justify-between p-2 items-center font-medium">
                        <img className="h-20" src={product.image} alt={product.name} />

                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button className="bg-red-600 p-2 text-white rounded-lg text-sm">Remove</button>
                    </div>

                </div>
            ))}

        </div>
    )
}
