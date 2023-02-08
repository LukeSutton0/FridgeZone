import classes from './StockView.module.css'

const StockDetails = ({stock}) => {
    return (
        <div className={classes.stockViewIndividual}>
            <h5>Name: {stock.name}</h5>
            <p>Current Quantity: {stock.quantity}</p>
            <p>Expiry Date: {stock.expiryDate}</p>
            <p>Supplier: {stock.supplier}</p>
            <p>ID:{stock._id}</p>
        </div>
    )
}


export default StockDetails;