import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.browser',
  name: '浏览器',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过浏览器开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.browser.BrowserActivity',
          matches:
            '[text$="跳过"][text.length<10][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
