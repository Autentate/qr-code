import { Routes, Route} from "react-router-dom";

import { Navigation } from './Components/Navigation/Navigation';
import { QrCodeGenerator } from "./Components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./Components/Scan/QrCodeScanner";
import { GenerateHistory } from "./Components/GenerateHistory/GenerateHistory";
import { ScanHistory } from "./Components/ScanHistory/ScanHistory";


const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
                <Route path="/qr-code/scan" element={<QrCodeScanner />} />
                <Route path="/qr-code/GenerateHistory" element={<GenerateHistory />} />
                <Route path="/qr-code/ScanHistory" element={<ScanHistory />} />
            </Routes>
        </div>
    )
}

export { Layout };