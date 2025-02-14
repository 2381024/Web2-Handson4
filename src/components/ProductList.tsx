import Product from "./Products";

const ProductList = () => {
    const products: Product[] = [
        {
            name: 'Laptop',
            description: 'High-performance laptop for work and play',
            price: '$999',
            imageUrl: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Controller',
            description: 'Best price to performance XBOX controller stick',
            price: '$99',
            imageUrl: 'https://images.unsplash.com/photo-1602610411365-76e8c2a88e18?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Camera',
            description: 'Fujifilm X-T3 Camera',
            price: '$1999',
            imageUrl: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Earbuds',
            description: 'Best price to performance earbuds',
            price: '$69',
            imageUrl: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Headphone',
            description: 'Highest quality headphone',
            price: '$299',
            imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Keyboard',
            description: 'Hotswappable mechanical keyboard with gasket mount',
            price: '$79',
            imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

    return (
        <>
            <h1>Product List</h1>
            {
                products.map((product, index) => {
                    return <Product key={index} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl}/>
                })
            }
        </>
    )
}

export default ProductList