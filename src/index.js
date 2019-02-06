import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { StaticRouter } from 'react-router-dom';
import { App } from './App';


const componentSelector = 'data-component';

const nodes = document.querySelectorAll(`[${componentSelector}]`);


window.onload = () => {


    // Result is here ./info/preload-all-console.png
    // Loadable.preloadAll().then(() => { // createLoadableComponent.init


    // Result is here ./info/preload-ready-console.png
    Loadable.preloadReady().then(() => { // iswebpack ready
        for (let i = 0; i < nodes.length; i += 1) {
            const rootElement = nodes[i];
            const componentName = rootElement.getAttribute(componentSelector);
            const componentRoute = componentName ? `/component-render/${componentName}` : '/component-render';

            const Application = (
                <StaticRouter context={{}} location={componentRoute}>
                    <App />
                </StaticRouter>
            );

            if (!rootElement) {
                console.warn('Element not found'); // eslint-disable-line
            } else if (rootElement.hasChildNodes() === true) {
                // Loads for the SSR (already rendered)
                ReactDOM.hydrate(Application, rootElement);
            } else {
                // Loads for the CLIENT
                ReactDOM.render(Application, rootElement);
            }
        }
    });
};
