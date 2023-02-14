import classes from './HealthAndSafety.module.css'

const ReportDetails = ({report}) => {
    return (
        <div className={classes.healthSafetyIndividual}>
            <div>
                <p>{report.reporter}</p>
            </div>
            <div>
                <p>{report.dateOfReport}</p>
            </div>
            <div>
                <ul>
                    {report.itemsExpired.map((expiredItem, idx) => (
                        <li key={idx}>
                            {expiredItem.name}: {expiredItem.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p>{report.quantityExpired}</p>
            </div>
        </div>
    )
}
export default ReportDetails;