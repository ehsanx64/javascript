import { useColorScheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';

function DarkModeToggler(props) {
    let { mode, setMode } = useColorScheme();

    switch (mode) {
        case 'dark':
            return (
                <IconButton onClick={() => {
                    setMode('light');
                }} aria-label="dark-mode">
                    <DarkMode />
                </IconButton>
            );
            break;

        case 'light':
            return (
                <IconButton onClick={() => {
                    setMode('system');
                }} aria-label="light-mode" sx={{ color: 'white' }}>
                    <LightMode />
                </IconButton>
            );
            break;

        default:
            return (
                <IconButton onClick={() => {
                    setMode('dark');
                }} aria-label="light-mode">
                    <SettingsBrightnessIcon />
                </IconButton>
            );
            break;
    }
}

export default DarkModeToggler