import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.skyworthdigital.picamera',
  name: '创维智慧云',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.HomeActivity',
          matches:
            '@TextView[text*="跳过"] <3 RelativeLayout < RelativeLayout < RelativeLayout < RelativeLayout < RelativeLayout < FrameLayout < FrameLayout < [vid="splash_container"]',
        },
      ],
    },
  ],
});
