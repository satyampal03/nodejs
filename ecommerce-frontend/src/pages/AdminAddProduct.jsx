import { useState } from "react"
import { Link } from "react-router-dom"
const API = import.meta.env.VITE_API_URL


function AdminAddProduct() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    //    const [image, setImage]= useState('');
    const [stock, setStock] = useState(0);

    const [productListed, setProductListed] = useState(false);

    // handleProduct Save 
    const handleProductSave = async () => {
        if (!name || !category || !price || !description || !stock) {
            alert("Please Fill All Fields")
            return;
        }

        const productData = {
            name: name,
            description: description,
            price: price,
            category: category,
            stock: stock,
        }

        //  console.log('-------------->',productData);

        try {
            const res = await fetch(`${API}/api/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            })

            //    const data = await res.json();
            setProductListed(true)

        } catch (err) {
            console.log('Product Err: ', err)
        }
    }


    if (productListed) {
        return (
            <div className="order-success-container">
                <div className="success-icon">✓</div>
                <h2>Product Listed Successfully!</h2>
                <Link className="btn-primary" to="/" >Home</Link>
            </div>
        );
    }

 

    return <>

        <div className="admin-container">
    <div className="form-card">
        <h2 className="form-title">New Product</h2>
        <p className="form-subtitle">Fill in the details to list your item in the store.</p>

        <form className="product-form" onSubmit={(e) => { e.preventDefault(); handleProductSave(); }}>
            
            <div className="field-container">
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder=" " />
                <label htmlFor="name">Product Name</label>
            </div>

            <div className="form-group-row">
                <div className="field-container">
                    <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required placeholder=" " />
                    <label htmlFor="price">Price ($)</label>
                </div>
                <div className="field-container">
                    <input id="stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} required placeholder=" " />
                    <label htmlFor="stock">Stock Qty</label>
                </div>
            </div>

            <div className="field-container">
                <input id="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} required placeholder=" " />
                <label htmlFor="category">Category</label>
            </div>

            <div className="field-container">
                <textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder=" " />
                <label htmlFor="desc">Description</label>
            </div>

            <button type="submit" className="submit-btn">
                <span>Add Product</span>
                <div className="btn-glow"></div>
            </button>
        </form>
    </div>
</div>


    </>
}

export default AdminAddProduct