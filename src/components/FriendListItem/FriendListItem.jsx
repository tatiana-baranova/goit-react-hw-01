import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline, }) => {
    return (
        <li className={css.friend}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.nameAvatar}>{name}</p>
            <p className={clsx(isOnline ? css.green : css.red)}>{isOnline? "Online" : "Offline"}</p>
        </li>
    )
}
export default FriendListItem;