import { Application, Container } from 'pixi.js';
import { addStars } from './stars';
import { addMoon } from './moon';
import { addMountains } from './mountains';
import { addTrees } from './trees';
import { addGround } from './ground';
import { addTrain } from './trains';

const app = new Application();

const trainContainer = new Container();

(async () => {
    await app.init({ background: '#021f4b', resizeTo: window });

    document.body.appendChild(app.canvas);

    addStars(app);
    addMoon(app);
    addMountains(app);
    addTrees(app);
    addGround(app);
    addTrain(app, trainContainer);
})();
