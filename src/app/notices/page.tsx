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
                <h1 className={style.TitleNoticia}>Notícias</h1>

                <section className={style.mission}>
                    <div className={style.cards}>
                        <h1>Missão 1</h1>
                    </div>

                    <div className={style.cards}>
                        <h1>Missão 2</h1>
                    </div>

                    <div className={style.cards}>
                        <h1>Missão 3</h1>
                    </div>

                    <div className={style.cards}>
                        <h1>Missão 4</h1>
                    </div>

                    <div className={style.cards}>
                        <h1>Missão 5</h1>
                    </div>

                 
                </section>

                <Footer />
            </div>
        </main>
    );
}
