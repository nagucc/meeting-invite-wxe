/*
eslint-disable no-param-reassign
 */

import { Router } from 'express';
import { SUCCESS, UNAUTHORIZED, UNKNOWN_ERROR,
  OBJECT_IS_NOT_FOUND, SERVER_FAILED } from 'nagu-validates';
import { signinApi, signinWxcfg } from './config';
import wxent, { event } from 'wechat-enterprise';

const router = new Router();

const handleEvent = eventHandlers =>
  (msg, req, res, next) => {
    try {
      if (eventHandlers[msg.EventKey]) {
        eventHandlers[msg.EventKey](msg, req, res, next);
      } else {
        res.reply(`正在建设中：${msg.EventKey}`);
      }
    } catch (err) {
      res.reply(`出现错误，请截图并与管理员联系。\n错误信息：${err.toString()}`);
    }
  };

const eventHandlers = {
  signin: (msg, req, res) => {
    const { FromUserName } = msg;
    signinApi.getUser(FromUserName, (err, user) => {
      if (err || user.errcode !== 0) {
        res.reply(`[getUser]发生错误，请将错误代码发给管理员：${err}`);
      } else {
        const department = user.department.concat([2728]);
        signinApi.updateUser({
          userid: user.userid,
          department,
        }, (err2, user2) => {
          if (err2 || user2.errcode !== 0) {
            res.reply(`[updateUser]发生错误，请将错误代码发给管理员：${err}`);
          } else {
            res.reply('报名成功');
          }
        });
      }
    });
  },
};

router.use('/',
  wxent(signinWxcfg, event(handleEvent(eventHandlers)))
);

export default router;
