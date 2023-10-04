import { Navigate } from 'react-router-dom';
import { AdminMenu } from './AdminMenu';
import { DefaultProps } from '@types';
import { useAuthentication } from '@hooks/useAuthentication';

export const AdminLayout = (props: DefaultProps) => {
    const isAuthenticated = useAuthentication();

    return (
        <>
            {!isAuthenticated && <Navigate to="/" />}
            <section className="lg:px-4 lg:py-4">
                <div className="lg:flex lg:flex-row">
                    <div className="flex flex-col lg:w-1/5 lg:p-3">
                        <AdminMenu />
                    </div>
                    <div className="flex-1 lg:p-3">{props.children}</div>
                </div>
            </section>
        </>
    );
};
