import { Application } from 'pixi.js';
import { addStars } from './stars';
import { addMoon } from './moon';
import { addMountains } from './mountains';
import { addTrees } from './trees';
import { addGround } from './ground';

const app = new Application();

(async () => {
    await app.init({ background: '#021f4b', resizeTo: window });

    document.body.appendChild(app.canvas);

    addStars(app);
    addMoon(app);
    addMountains(app);
    addTrees(app);
    addGround(app);
})();
