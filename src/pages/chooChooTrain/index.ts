import { Application } from 'pixi.js';
import { addStars } from './stars';
import { addMoon } from './moon';
import { addMountains, animateMountains } from './mountains';

const app = new Application();

(async () =>
{
    await app.init({ background: '#021f4b', resizeTo: window });

    document.body.appendChild(app.canvas);

    addStars(app);
    addMoon(app);
    addMountains(app);
 
    app.ticker.add((time) => {
        animateMountains(app, time);
    });
})();
