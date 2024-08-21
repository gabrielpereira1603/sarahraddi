"use client";

import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AboutIcon from '@/components/Header/icons/about.png';
import PropostaIcon from '@/components/Header/icons/proposta.png';
import CampanhaIcon from '@/components/Header/icons/campanha.png';
import NoticiaIcon from '@/components/Header/icons/noticia.png';
import Logo from '@/../../public/assets/logo-roxa.png';



export const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div>
                <div className={styles.logo}>
                    <Image src={Logo} alt='Logo Sarah Raddi' />
                </div>

                <nav>
                    <ul className={styles.navList}>
                        <li className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
                            <Link href="/">
                                <Image src={AboutIcon} alt='Icone Sobre Mim' width={80} />
                                SOBRE MIM
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${pathname === '/projects' ? styles.active : ''}`}>
                            <Link href="#">
                                <Image src={PropostaIcon} alt='Icone Projetos' width={80} />
                                PROJETOS
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${pathname === '/campaign' ? styles.active : ''}`}>
                            <Link href="#">
                                <Image src={CampanhaIcon} alt='Icone Campanha' width={80} />
                                CAMPANHA
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${pathname === '/notices' ? styles.active : ''}`}>
                            <Link href="#">
                                <Image src={NoticiaIcon} alt='Icone Notícias' width={80} />
                                NOTÍCIAS
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
