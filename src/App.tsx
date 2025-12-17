import { Provider } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { store } from './app/store';
import { OccupancyDashboard } from './app/pages/OccupancyDashboard/OccupancyDashboard';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
        },
    },
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <OccupancyDashboard />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
