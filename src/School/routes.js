import { Router } from 'express';

import { SchoolController } from './controllers.js';
import { auth, isAdmin } from './middlewares.js';

const routes = Router();
const controller = new SchoolController();

routes.get('/schools', auth, isAdmin, controller.index);
routes.post('/schools', auth, isAdmin, controller.store);
routes.get('/schools/:id', auth, isAdmin, controller.show);
routes.patch('/schools/:id', auth, isAdmin, controller.update);
routes.delete('/schools/:id', auth, isAdmin, controller.destroy);

export default routes;
