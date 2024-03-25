import { createRoot } from 'react-dom/client';
import App from './App';

window.BillWinnerWidget = {
    init: function (options) {
        const container = document.getElementById(options.containerId);
        const root = createRoot(container);
        root.render(<App {...options} />);
    },
};
//
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<App />);