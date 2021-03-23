import { Router } from 'express';

import user from './User/routes.js';

const router = Router();

router.use(user);

export default router;
