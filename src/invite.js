/*
eslint-disable no-param-reassign
 */

import { Router } from 'express';
import { SUCCESS, UNAUTHORIZED, UNKNOWN_ERROR,
  OBJECT_IS_NOT_FOUND, SERVER_FAILED } from 'nagu-validates';


const router = new Router();

router.get('/me', (req, res) => {
  res.send('test!!');
});
export default router;
