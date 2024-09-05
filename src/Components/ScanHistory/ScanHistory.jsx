import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';

import s from './ScanHistory.module.css'

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    console.log(data);

    return (
        <div>
            {data.map((text) => (
                <div className={s.container}>
                    <p key={text} className={s.p}>
                        Вводимая ссылка: {text}
                        <QRCodeSVG value={text} size={248} />
                    </p>
                </div>
            ))};
        </div>
    )
}