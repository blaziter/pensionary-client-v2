import { Link, useParams } from 'react-router-dom';
import {
    ClarityAdministratorSolid,
    FluentPeopleCommunity16Filled,
    HealthIconsDoctor,
    HealthIconsNurse,
    IonStatsChartSharp,
    MaterialSymbolsCalendarMonthSharp,
    MedicalIconIAdministration,
} from '@assets/icons';

export const AdminMenu = () => {
    const { role } = useParams();

    return (
        <>
            <aside className="select-none">
                <p>Obecné</p>
                <ul>
                    <li>
                        <Link
                            className={`mb-4 ml-8 flex flex-row items-center rounded px-3 py-2 hover:bg-gray-300 hover:text-black ${
                                role == undefined &&
                                'bg-purple-600 text-white hover:bg-purple-400'
                            }`}
                            to="/admin/dashboard"
                        >
                            <IonStatsChartSharp /> Přehled
                        </Link>
                    </li>
                </ul>
                <p>Správa</p>
                <ul>
                    <li>
                        <Link
                            className={`ml-8 flex flex-row items-center rounded px-3 py-2 hover:bg-gray-300 hover:text-black ${
                                role == 'admin' &&
                                'bg-purple-600 text-white hover:bg-purple-400'
                            }`}
                            to="/admin/table/admin/1"
                        >
                            <ClarityAdministratorSolid /> Správci
                        </Link>
                    </li>
                    <li className="ml-8">
                        <a className="px-3 py-2">Lékařský tým</a>
                        <ul className="m-3 border-l">
                            <li>
                                <Link
                                    className={`ml-8 flex flex-row items-center rounded px-3 py-2 hover:bg-gray-300 hover:text-black ${
                                        role == 'administration' &&
                                        'bg-purple-600 text-white hover:bg-purple-400'
                                    }`}
                                    to="/admin/table/administration/1"
                                >
                                    <MedicalIconIAdministration /> Vedení
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ml-8 flex flex-row items-center rounded px-3 py-2 hover:bg-gray-300 hover:text-black ${
                                        role == 'doctor' &&
                                        'bg-purple-600 text-white hover:bg-purple-400'
                                    }`}
                                    to="/admin/table/doctor/1"
                                >
                                    <HealthIconsDoctor /> Lékaři
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ml-8 flex flex-row items-center rounded px-3 py-2 hover:bg-gray-300 hover:text-black ${
                                        role == 'nurse' &&
                                        'bg-purple-600 text-white hover:bg-purple-400'
                                    }`}
                                    to="/admin/table/nurse/1"
                                >
                                    <HealthIconsNurse /> Sestřičky
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ml-8 flex flex-row items-center rounded px-3 py-2 hover:bg-gray-300 hover:text-black ${
                                        role == 'announcements' &&
                                        'bg-purple-600 text-white hover:bg-purple-400'
                                    }`}
                                    to="/admin/table/announcements/1"
                                >
                                    <MaterialSymbolsCalendarMonthSharp />{' '}
                                    Události
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ml-8 flex flex-row items-center rounded px-3 py-2 hover:bg-gray-300 hover:text-black ${
                                        role == 'info' &&
                                        'bg-purple-600 text-white hover:bg-purple-400'
                                    }`}
                                    to="/admin/table/info/1"
                                >
                                    <FluentPeopleCommunity16Filled /> Členové
                                    týmu
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </>
    );
};
