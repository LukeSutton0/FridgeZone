import classes from './RemoveStock.module.css'



const RemoveStockDetails = ({stock}) => {



    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log("test")
    }

    return (
            <form onSubmit={handleSubmit} className={classes.stockRemoveIndividual}>
                <div>
                    <p>{stock.name}</p>
                </div>
                <div>
                <p>{stock.quantity}</p>
                </div>
                <div>
                    <p>{stock.expiryDate}</p>
                </div>
                <div>
                    <p>{stock._id}</p>
                </div>
                <div className={classes.RemoveStockRemoveDiv}>
                    <input type="text"/>
                    <button>Remove</button>
                </div>
        </form>
    )
}


export default RemoveStockDetails;