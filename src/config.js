
import API from 'wxent-api-redis';


export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `wx.nagu.cc:${port}`;
export const redisConfig = {
  host: process.env.HOST_REDIS || 'localhost',
  port: process.env.PORT_REDIS || 6379,
};

export const wxentConfig = {
  corpId: process.env.WXE_CORPID,
  secret: process.env.WXE_SECRET,
  angetId: process.env.WXE_AGENTID || 5,
};
export const wxapi = API(wxentConfig.corpId, wxentConfig.secret,
  wxentConfig.agentId, redisConfig.host, redisConfig.port);
