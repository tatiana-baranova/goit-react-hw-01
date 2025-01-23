import clsx from "clsx";
import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.container}>
            <div className={css.userProfile}>
                <img
                    className={css.picture}
                    src={image}
                    alt="User avatar" />
                <p className={css.user}>{name}</p>
                <p className={css.info}>@{tag}</p>
                <p className={css.info}>{location}</p>
            </div>
            <ul className={css.statsInfo}>
                <li className={css.list}>
                    <span className={css.textList}>Followers</span>
                    <span className={css.stats}>{stats.followers}</span>
                </li>
                <li className={clsx(css.list, css.listViews)}>
                    <span className={css.textList}>Views</span>
                    <span className={css.stats}>{stats.views}</span>
                </li>
                <li className={css.list}>
                    <span className={css.textList}>Likes</span>
                    <span className={css.stats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}
export default Profile;