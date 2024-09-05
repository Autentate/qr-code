import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';

import s from './GenerateHistory.module.css'

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    console.log(data);

    return (
        <div>
            {data.map((text) => (
                <div className={s.container}>
                    <p key={text} className={s.p}>
                        Вводимый текст: {text}
                        <QRCodeSVG value={text} size={248} />
                    </p>
                </div>
            ))}
        </div>
    )
}