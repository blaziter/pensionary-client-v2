import { useAuthentication } from '@hooks/useAuthentication';
import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';
import {
    MaterialSymbolsAccountCircle,
    MaterialSymbolsPassword,
} from '@assets/icons';
import { Container } from '@components/Container';

export const Login = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const useAuth = useAuthentication();
    const [redirLogin, setRedirLogin] = useState<boolean>(false);

    const change = () => {
        const username = usernameRef.current;
        const password = passwordRef.current;
        username!.value == ''
            ? username?.classList.remove('login--non-empty')
            : username?.classList.add('login--non-empty');
        password!.value == ''
            ? password?.classList.remove('login--non-empty')
            : password?.classList.add('login--non-empty');
    };

    const handleLogin = () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (username == '') return;
        if (password == '') return;

        const status = useAuth.login(username!, password!);
        setRedirLogin(status);
    };

    useEffect(() => {
        usernameRef.current?.focus();
        passwordRef.current?.focus();
    }, []);

    return (
        <>
            {redirLogin && <Navigate to="/admin" />}
            <Container className="mx-auto">
                <div className="rounded-xl border-2 border-solid border-indigo-100 p-6">
                    <div className="mx-auto flex flex-col gap-4 rounded-xl py-8">
                        <div className="flex gap-8">
                            <div className="flex items-center">
                                <MaterialSymbolsAccountCircle />
                            </div>
                            <div className="input-animation flex-1 rounded-xl border-2 border-solid border-indigo-400">
                                <input
                                    onChange={change}
                                    className="login-input h-full w-full rounded-xl px-4 py-4 pt-8"
                                    ref={usernameRef}
                                />
                                <label className="login-placeholder pointer-events-none absolute left-[16rem] top-[10.75rem] select-none">
                                    Přihlašovací jméno
                                </label>
                                <span className="login-title pointer-events-none absolute left-[13.1rem] select-none">
                                    Přihlašovací jméno
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex items-center">
                                <MaterialSymbolsPassword />
                            </div>
                            <div className="input-animation flex-1 rounded-xl border-2 border-solid border-indigo-400">
                                <input
                                    onChange={change}
                                    className="login-input h-full w-full rounded-xl px-4 py-4 pt-8"
                                    type="password"
                                    ref={passwordRef}
                                />
                                <label className="login-placeholder pointer-events-none absolute left-[16rem] top-[16.25rem] select-none">
                                    Heslo
                                </label>
                                <span className="login-title pointer-events-none absolute left-52 select-none">
                                    Heslo
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <button
                            className="rounded-xl bg-indigo-600 p-3 text-white hover:bg-indigo-400"
                            onClick={handleLogin}
                        >
                            Přihlásit se
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
};
