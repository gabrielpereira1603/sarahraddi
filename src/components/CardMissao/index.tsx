import style from './cardMissao.module.css'

import IconMissao from './images/missaoIcon.png';
import FundoCard from './images/fundocard.jpg';
import Image, { StaticImageData } from 'next/image';

interface CardMissaoProps {
    title: string;
    description: string;
}

export const CardMissao: React.FC<CardMissaoProps> = ({
    title,
    description,
}) => {
    return (
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.backgroundCard}>
                    <Image src={FundoCard} alt='Fundo do card' width={350} height={200}/>
                    
                    <div className={style.CardIcon}>
                        <Image src={IconMissao} alt='Icone de Missão' width={80} height={80}/>
                    </div>
                </div>
                
                <div className={style.cardContent}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    
    )
}
