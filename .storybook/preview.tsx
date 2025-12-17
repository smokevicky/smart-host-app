import type { Preview } from "@storybook/react-vite";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";


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

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: ['Atoms', 'Molecules', 'Templates', 'Pages'],
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme} >
                <CssBaseline />
                < Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
