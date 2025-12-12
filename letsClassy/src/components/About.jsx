import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.loadProducts();
    }

    async loadProducts() {
        this.setState({ isLoading: true, error: null });
        try {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const json = await response.json();
            this.setState({ products: json.products || [] });
        } catch (err) {
            this.setState({ error: err.message || "Unexpected error" });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { products, isLoading, error } = this.state;

        return (
            <>
                <UserClass
                    name="Rohit in the Class Component"
                    age="20years from class"
                    current="student from class"
                />
                <User
                    name="Rohit in the Functional Component"
                    age="20years"
                    current="student"
                />
                <section>
                    <h2>Products</h2>
                    {isLoading && <p>Loading products…</p>}
                    {error && <p>{error}</p>}
                    {!isLoading && !error && (
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <strong>{product.title}</strong> — {product.category}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </>
        );
    }
}

export default About;