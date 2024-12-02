export default function Product(props){
    const p = props.product;
    return <div className="Product">
        <h2>{p.name}</h2>
        <h2>{p.price}</h2>
        <h2>{p.description}</h2>
    </div>
}