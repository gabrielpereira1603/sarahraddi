import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Separator } from "@/components/Separator";
import style from './notices.module.css';
import Image from 'next/image';

import Img1 from '@/components/Footer/images/img1.png';
import Img2 from '@/components/Footer/images/img2.png';
import Img3 from '@/components/Footer/images/img3.png';
import Compromisse from "@/../public/assets/lembrete.png";
import Noticia from "@/../public/assets/noticia.png";
import Discurse from "@/../public/assets/discurso.png";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";


export default function Page() {
    return (
        <main>
            <div className={style.notices}>
                <Header />
                <section className={style.commitmentsSection}>
       
                </section>

                <Footer />
            </div>
        </main>
    );
}
