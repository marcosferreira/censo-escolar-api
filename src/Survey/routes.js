import { Router } from 'express';

import { SurveyController } from './controllers';
import { auth, isAdmin } from './middlewares';

const routes = Router();
const controller = new SurveyController();

routes.get('/surveys', auth, isAdmin, controller.index);
routes.post('/surveys', auth, isAdmin, controller.store);
routes.get('/surveys/:id', auth, isAdmin, controller.show);
routes.patch('/surveys/:id', auth, isAdmin, controller.update);
routes.delete('/surveys/:id', auth, isAdmin, controller.destroy);

export default routes;
