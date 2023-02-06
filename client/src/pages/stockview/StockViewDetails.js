import classes from './StockView.module.css'

const StockDetails = ({stock}) => {
return (
<div className="stock-details">
<h4>Name: {stock.name}</h4>
<p><strong>ID: </strong>{stock._id}</p>
<p><strong>Quantity: </strong>{stock.quantity}</p>
<p><strong>Expity Date: </strong> {stock.expiryDate}</p>
<p><strong>Supplier: </strong>{stock.supplier}</p>
</div>
)
}


export default StockDetails;