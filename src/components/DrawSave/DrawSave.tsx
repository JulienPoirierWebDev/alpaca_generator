import { useEffect } from 'react';
import Button from '../Button/Button';

// @ts-ignore
const DrawSave = ({canvas}) => {

    const handleSave = () => {
        let image = canvas.current.toDataURL("image/png").replace("image/png","image/octet-stream")
        window.localStorage.href=image;
    }

    useEffect(() => {
        const handleDownload = () => {
            const link = document.createElement('a');
            link.download = 'myDrawing.png';
            link.href = canvas.current.toDataURL();
            link.click();
        }
        const download = document.getElementById('download');
        download?.addEventListener('click', handleDownload);
        return () => {
            removeEventListener('click', handleDownload);
        }

    }, [])
    return (
        <Button id="download" handleClick={handleSave} element={"Let's go !"}/>
    );
};

export default DrawSave;
