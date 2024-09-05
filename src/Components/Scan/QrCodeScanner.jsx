import { useState } from 'react';
import { Scanner } from "@yudiel/react-qr-scanner";

import s from './QrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState('');

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };


    const settings = {
        audio: false,
        finder: false,
    };

    return (
        <div className={s.container}>
            <Scanner
                components={settings}
                styles={{
                    container: { width: 350, }
                }}
                onScan={scanHandler}
            />
            <h1 className={s.title}>Результат: <span className={s.span}>{ scanned }</span></h1>
        </div>
    )
};