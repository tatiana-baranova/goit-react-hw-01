import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <table className={css.table}>
            <thead className={css.listThead}>
                <tr>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tbody}>
                {items.map((item) => {
                    return (
                        <tr className={css.tr} key={item.id}>
                            <td className={css.td}>{capitalizeFirstLetter(item.type)}</td>
                            <td className={css.td}>{item.amount}</td>
                            <td className={css.td}>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default TransactionHistory;


