import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

import s from './QrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState('');

    const scanHandler = (result) => {
        if (!result) return;

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        if (prevData.includes(result.text)) return;

        setScanned(result.text);

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result.text])
        );
    };


    const settings = {
        audio: false,
        finder: false,
    };

    return (
        <div className={s.container}>
            <QrReader
                scanDelay={1000}
                onResult={scanHandler}
                containerStyle={{ width: '700px'}}
            />
            <h1 className={s.title}>Результат: <span className={s.span}>{ scanned }</span></h1>
        </div>
    )
};