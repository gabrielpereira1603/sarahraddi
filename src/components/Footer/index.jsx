import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";


import Img1 from '@/components/Footer/images/img1.png';
import Img2 from '@/components/Footer/images/img2.png';
import Img3 from '@/components/Footer/images/img3.png';
import Img4 from '@/components/Footer/images/img4.png';
import Img5 from '@/components/Footer/images/img5.png';



export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMediaContainer}>

                <div className={styles.titleSocialMedia}>
                    <h5>Redes Sociais</h5>
                    <p>Fique por dentro de tudo que a Sarah Raddi faz através das redes sociais.</p>
                </div>

                <div className={styles.socialMedia}>
                    <Link href="https://facebook.com" target="_blank">
                        <FaFacebookSquare size={40} color="#ffffff"/>
                    </Link>

                    <Link href="https://www.instagram.com/sarah_raddi/" target="_blank">
                        <FaInstagram size={40} color="#ffffff"/>
                    </Link>

                    <Link href="#" target='_blank'>
                        <AiFillTikTok size={40} color="#ffffff"/>
                    </Link>

                    <Link href="" target='_blank'>
                        <FaYoutube size={40} color="#ffffff"/>
                    </Link>
                </div>
            </div>

            <div className={styles.instagramSection}>
                <div className={styles.title}>
                    <div className={styles.separator}></div>
                    <h6>No Instagram <Link href="https://www.instagram.com/p/C-pghBAJGNw/" target="_blank">@sarah_raddi</Link></h6>
                    <div className={styles.separator}></div>
                </div>
                
                <div className={styles.instagramPosts}>
                    <Link href="https://www.instagram.com/p/C-pghBAJGNw/" target="_blank">
                        <Image src={Img1} alt="Post 1" width={150} height={150} />
                    </Link>
                    <Link href="https://www.instagram.com/p/C-nFFm4JOSQ/" target="_blank">
                        <Image src={Img2} alt="Post 1" width={150} height={150} />
                    </Link>
                    <Link href="https://www.instagram.com/p/C-gi6FWPUaY/" target="_blank">
                        <Image src={Img3} alt="Post 1" width={150} height={150} />
                    </Link>
                    <Link href="https://www.instagram.com/p/C9_LAHWJClv/" target="_blank">
                        <Image src={Img4} alt="Post 1" width={150} height={150} />
                    </Link>
                    <Link href="https://www.instagram.com/p/C9Y3NuPMRUP/" target="_blank">
                        <Image src={Img5} alt="Post 1" width={150} height={150} />
                    </Link>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; Copyright Sarah Raddi. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
