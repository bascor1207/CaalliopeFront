import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import styles from './Header.module.scss';

export const Header = () => {    
    const navigate = useNavigate();
    {/*const { success: isLogged } = useselector(({ auth }) => auth.login);
    const { success: isRegistered } = useselector(({ auth }) => auth.register);
    const handleLogout = () => {
        dispatch(onLogOut());
        dispatch(logout());
    };*/}

    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="picture" />
            </div>
            <div className={styles.navbar}>
                <a className={styles.library} onClick={()=>navigate('/account')}>Bibliothèque</a>
                <a className={styles.login} onClick={()=>navigate('/login')}>Se Connecter</a>
                {/*(isLogged || isRegistered) && (
                    <button className={styles.logout} onClick={() => handleLogout()}>
                        Log Out
                    </button>
                )*/}
            </div>
        </header>
    );
};