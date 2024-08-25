"use client";
import style from "./page.module.css";
import { Header } from "@/components/Header/index";
import { Footer } from "@/components/Footer/index";
import { Separator } from "@/components/Separator";
import { CardMissao } from "@/components/CardMissao";

import Wave from "@/../public/assets/wave.png"
import Certificado from "@/../public/assets/certificado.png";
import VisionIcon from "@/../public/assets/visao.png";
import MissionIcon from "@/../public/assets/missao.png";
import ValoresIcon from "@/../public/assets/valores.png";
import RespectIcon from "@/../public/assets/respect.png";
import HonestidadeIcon from "@/../public/assets/honestidade.png";
import HumildadeIcon from "@/../public/assets/humildade.png";
import EmpatiaIcon from "@/../public/assets/empatia.png";
import JusticaIcon from "@/../public/assets/justica.png";
import BioSarah from "@/../public/assets/perfil1.jpg";
import SobreSarah from "@/../public/assets/photos/sarah_raddi_photo_notback.png";



import { LuExternalLink } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";

import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duração da animação
      once: true, // Se deve animar apenas uma vez
    });
  }, []);

  return (
      <main>
        <div className={style.home}>
          <Header />
          <div className={style.introduction} data-aos="fade-up">
            <div className={style.left}>
              <h1>Quem é Sarah Raddi</h1>
              <h2>Candidata a vereadora pelo partido União Brasil</h2>
              <p>
                <Image src={BioSarah} alt="Sarah" width={400}/>
              </p>
            </div>

            <div className={style.right}>
              <h3>Minha trajetória</h3>
              <p>
                <em>
                Sarah Raddi é uma mulher de raízes profundas, nascida em Anápolis, Goiás, e criada em Inhumas, Goiás. Desde cedo, aprendeu com sua avó Lázara o valor do trabalho manual e das tradições familiares, o que moldou sua dedicação e respeito pelos costumes. Ao lado de seu esposo Rigor, Sarah desbravou novos caminhos ao fundar uma empresa em um novo município, onde está estabelecida há quase 15 anos, construindo uma trajetória marcada por perseverança e fortalecimento de laços comunitários.

                Como empreendedora há mais de 14 anos, Sarah entende as necessidades de quem trabalha duro todos os dias para alcançar seus sonhos. Mãe de três filhos, orgulha-se de estar formando a primeira médica da família, uma prova de que, com esforço e determinação, grandes conquistas são possíveis.

                Movida por valores como respeito, honestidade, humildade, empatia e justiça, Sarah está agora se colocando à disposição da população de Paranaíba, MS, como candidata a vereadora pelo União Brasil. Ela acredita firmemente que pode continuar a transformar vidas, assim como fez ao longo de sua vida pessoal e profissional, e está comprometida em representar os interesses da cidade com integridade e dedicação.
                </em>
              </p>

              <p><strong> ~ Sarah Alberto de Morais Raddi, 2024</strong></p>
            </div>
          </div>

          <div className={style.blog}>
            <div className={style.biography} data-aos="fade-up-right">
              <h3>Sarah Raddi Biografia Oficial</h3>
              <div className={style.textBiography}>
                <Image src={SobreSarah} alt="Foto SarahRaddi" width={300}/>
                <p>
                  Sarah Raddi é uma mulher determinada, nascida em Anápolis, Goiás, e criada em Inhumas, Goiás, onde desde cedo aprendeu com sua avó Lázara o valor do trabalho árduo e das tradições familiares. 
                  Ao lado de seu esposo, Rigor Raddi, Sarah desbravou novos caminhos ao fundar uma empresa em um novo município, onde está estabelecida há quase 15 anos. Com muito esforço e dedicação, 
                  conquistou seu espaço na comunidade local e se tornou uma referência de integridade e perseverança.
                  Empreendedora há mais de 14 anos, Sarah tem uma conexão profunda com as necessidades dos trabalhadores e das famílias que, como ela, lutam diariamente por um futuro melhor. 
                  Sua experiência como mãe de três filhos, incluindo a primeira médica da família, reflete seu compromisso com a educação e o desenvolvimento pessoal.
                </p>

                <p>
                Guiada por valores como respeito, honestidade, humildade, empatia e justiça, Sarah Raddi agora se apresenta como candidata a vereadora em Paranaíba, MS, pelo União Brasil. 
                Com um forte senso de responsabilidade e uma vontade inabalável de fazer a diferença, ela está determinada a trabalhar incansavelmente para melhorar a qualidade de vida dos cidadãos de Paranaíba, promovendo ações que realmente impactem o dia a dia das pessoas.
                </p>
                <p className={style.enfasis}>
                  "Vamos juntos construir um futuro melhor para Paranaíba!" – este é o lema que guia Sarah Raddi em sua missão de transformar a cidade, trazendo consigo sua experiência, sua fé e seu comprometimento com a comunidade.
                </p>
              </div>             
            </div>

            <div className={style.blogRight} data-aos="fade-up-left">
              <Image src={Certificado} alt="Placeholder Image" />
              <h4>ELEIÇÕES 2024</h4>
              <div className={style.description}>
                <p>O RenovaBR é uma iniciativa de renovação política idealizada pelo empreendedor e investidor Eduardo Mufarej. O Renova apoia o surgimento de novas lideranças políticas no Brasil através da qualificação e formação de quadros.</p>
                <button>
                  <LuExternalLink />
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>

          <section className={style.objetivos} data-aos="fade-up">
            <h3>Princípios & Objetivos</h3>

            <Separator
              name="Visão"
              icon={VisionIcon}
            />
            
            <div className={style.visionDescripition}>
              <p>
              Ser uma força transformadora na comunidade de Paranaíba, inspirando mudanças positivas e contribuindo para o desenvolvimento sustentável da cidade. Sarah Raddi enxerga uma Paranaíba onde cada cidadão tem acesso a oportunidades justas, uma educação de qualidade, e onde os valores humanos são sempre priorizados.             </p>
            </div>

            <Separator
              name="Missão"
              icon={MissionIcon}
            />

            <div className={style.mission}>
              Sarah Raddi tem como missão representar e defender os interesses da população de Paranaíba com integridade, trabalhando incansavelmente para melhorar a qualidade de vida de todos os cidadãos. Ela se compromete a promover iniciativas que fomentem o crescimento econômico, o bem-estar social e o acesso a serviços públicos de qualidade, sempre com um olhar atento às necessidades da comunidade.
            </div>

            <Separator
              name="Valores"
              icon={ValoresIcon}
            />

            <div className={style.values}>
              <div className={style.cards}>
                <div className={style.card}>
                  <Image src={RespectIcon} alt={"Respeito Icon"}/>
                  <p>Valoriza cada indivíduo e suas necessidades, tratando todos com dignidade e consideração.</p>
                </div>

                <div className={style.card}>
                  <Image src={HonestidadeIcon} alt={"Honestidade Icon"}/>
                  <p>Preza pela transparência e verdade em todas as suas interações, tanto pessoais quanto profissionais.</p>
                </div>
                <div className={style.card}>
                  <Image src={HumildadeIcon} alt={"Humildade Icon"}/>
                  <p>Reconhece a importância de aprender com os outros e valoriza a simplicidade e o trabalho árduo.</p>
                </div>
                <div className={style.card}>
                  <Image src={EmpatiaIcon} alt={"Empatia Icon"}/>
                  <p>Se coloca no lugar do próximo, entendendo suas dificuldades e buscando soluções que beneficiem a todos.</p>
                </div>
                <div className={style.card}>
                  <Image src={JusticaIcon} alt={"Justiça Icon"}/>
                  <p>Comprometida com a equidade, sempre buscando o que é certo para a comunidade.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
  );
}
