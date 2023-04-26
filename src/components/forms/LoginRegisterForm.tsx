import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/*import { usedispatch } from '../../store/initStore';
import { IRegisterAndLoginData } from '../../store/interfaces';
import { login, registerUser, setUser } from '../../store/slices';*/

import { IRegisterAndLoginData } from '../../interfaces/IRegisterAndLoginData';

//import styles from './LoginRegisterForm.module.scss';

const LoginRegisterForm = () => {
    const { t } = useTranslation();
    const [isLogin, setIsLogin] = useState(false);
    const {
        formState: { errors }
    } = useForm<IRegisterAndLoginData>();
    //const dispatch = usedispatch();
    const navigate = useNavigate();

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: IRegisterAndLoginData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        };
        /*isLogin
            ? dispatch(login(data))
                  .then((response) => dispatch(setUser(response.payload)))
                  .then(() => navigate('/account'))
            : dispatch(registerUser(data))
                  .then((response) => dispatch(setUser(response.payload)))
                  .then(() => navigate('/account'));*/
    };

    const tradToDisplay = isLogin ? t('form.login') : t('form.register');

    return (
        <form onSubmit={onSubmit}>
            <div className="container">
                <span className="title">{tradToDisplay}</span>
                <div className="email}">
                    <label>{t('form.email')}</label>
                    <input className="email-input" type="email" name="email" required />
                    {errors.email && <span>{t('form.required')}</span>}
                </div>
                <div className="password}">
                    <label>{t('form.password')}</label>
                    <input className="password-input" type="password" name="password" required />
                    {errors.password && <span>{t('form.required')}</span>}
                </div>
                <div className="buttons">
                    <button className="switch" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin
                            ? t('form.switch').replace('0', t('form.register'))
                            : t('form.switch').replace('0', t('form.login'))}
                    </button>
                    <button className="submit" type="submit">
                        {tradToDisplay}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LoginRegisterForm;
