import React from "react";
import styles from "./Header.module.css";
import { paths } from "../../constants";
import {Link, NavLink, useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutTotal} from "../../redux/operations/user";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    const location = useLocation(),
        history = useHistory(),
        dispatch = useDispatch(),
        user = useSelector((state) => state.user);

    const logOut = () => {
        dispatch(logOutTotal());
        history.push(paths.login);
    };

    const isSwitchOn = () => {
        return location.pathname === paths.editor ||
            location.pathname === paths.templates ||
            location.pathname === `${paths.templates}/2`;
    };

    if(!user.uid) return(<></>);

    return (
    <header className={styles.header}>
      <Link to={user.uid ? paths.dashboard : paths.login}>
        <div className={styles.logo}/>
      </Link>
        <nav
            className={
                isSwitchOn()
                    ? `${styles.headerNav} ${styles.headerNavSwitcher}`
                    : styles.headerNav
            }
        >
            <ul className={styles.headerNavList}>
                <li>
                    <NavLink
                        to={paths.dashboard}
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={paths.templates}
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Templates
                    </NavLink>
                </li>
                {isSwitchOn() && (
                    <li>
                        <ThemeSwitcher />
                    </li>
                )}

                <li
                    className={
                        isSwitchOn()
                            ? `${styles.headerLogOut} ${styles.headerLogOutSwitch}`
                            : styles.headerLogOut
                    }
                    onClick={logOut}
                >
                    Log Out
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;
