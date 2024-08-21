import style from './separator.module.css'

import Image, { StaticImageData } from 'next/image';

interface SeparatorProps {
    name: string;
    icon: StaticImageData;
}

export const Separator: React.FC<SeparatorProps> = ({
    name,
    icon,
}) => {
    return (
        <div className={style.main}>
            <div className={style.separator}></div>
            <div className={style.icon}>
            <Image src={icon} alt={name}/>
            <p>{name}</p>
            </div>
            <div className={style.separator}></div>
        </div>
    )
}
