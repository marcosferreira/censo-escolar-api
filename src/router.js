import { Router } from 'express';

import user from './User/routes';

const router = Router();

router.use(user);

export default router;
