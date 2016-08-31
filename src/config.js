
import API from 'wxent-api-redis';


export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `wx.nagu.cc:${port}`;
export const redisConfig = {
  host: process.env.HOST_REDIS || 'localhost',
  port: process.env.PORT_REDIS || 6379,
};

export const wxentInvite = {
  corpId: process.env.WXE_CORPID,
  secret: process.env.WXE_SECRET,
  angetId: process.env.INVITE_WXE_AGENTID || 66,
};

export const inviteWxcfg = {
  token: process.env.INVITE_WXE_TOKEN,
  encodingAESKey: process.env.INVITE_WXE_AES_KEY,
  corpId: process.env.WXE_CORPID,
  secret: process.env.WXE_SECRET,
  agentId: process.env.INVITE_WXE_AGENTID || 66,
};
export const inviteApi = API(wxentInvite.corpId, wxentInvite.secret,
  wxentInvite.agentId, redisConfig.host, redisConfig.port);
