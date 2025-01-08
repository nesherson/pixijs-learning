import { Application } from 'pixi.js';

const app = new Application();

(async () =>
{
    await app.init({ background: '#021f4b', resizeTo: window });

    document.body.appendChild(app.canvas);
})();
