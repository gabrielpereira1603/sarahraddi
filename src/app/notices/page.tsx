import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Separator } from "@/components/Separator";
import style from './notices.module.css';
import Image from 'next/image';

import Img1 from '@/components/Footer/images/img1.png';
import Img2 from '@/components/Footer/images/img2.png';
import Img3 from '@/components/Footer/images/img3.png';
import Compromisse from "@/../public/assets/lembrete.png";
import Discurse from "@/../public/assets/discurso.png";

export default function Page() {
    return (
        <main>
            <div className={style.notices}>
                <Header />

                <section className={style.commitmentsSection}>
                    <h3>Notícias de hoje</h3>
                    <Separator name="Compromissos" icon={Compromisse} />
                    <div className={style.commitmentsGrid}>
                        <div className={style.commitmentCard}>
                            <Image src={Img1} alt="Compromisso 1" />
                            <h3>Carreata</h3>
                            <p><strong>Local:</strong> Praça Central, São Paulo</p>
                            <p><strong>Data:</strong> 20 de Agosto, 2024</p>
                            <p><strong>Hora:</strong> 14:00 PM</p>
                        </div>
                        <div className={style.commitmentCard}>
                            <Image src={Img2} alt="Compromisso 2" />
                            <h3>Ação de Candidatura</h3>
                            <p><strong>Local:</strong> Praça da República, Paranaíba</p>
                            <p><strong>Data:</strong> 25 de Agosto, 2024</p>
                            <p><strong>Hora:</strong> 10:00 AM</p>
                        </div>
                    </div>
                </section>

                <section className={style.speechesSection}>
                    <Separator name="Discursos" icon={Discurse} />
                    <div className={style.speechesGrid}>
                        <div className={style.speechCard}>
                            <Image src={Img3} alt="Discurso 1" />
                            <h3>Discurso Importante</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                        </div>
                        <div className={style.speechCard}>
                            <Image src={Img3} alt="Discurso 2" />
                            <h3>Discurso Importante</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                        </div>
                        <div className={style.speechCard}>
                            <Image src={Img3} alt="Discurso 3" />
                            <h3>Discurso Importante</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}
