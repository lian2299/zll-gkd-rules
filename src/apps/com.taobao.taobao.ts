import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '活动弹窗',
      desc: '关闭首页、我的淘宝中的优惠券等活动弹窗',
      rules: [
        {
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.TBMainActivity',
          ],
          matches: '[desc="关闭按钮"][clickable=true]',
        },
      ],
    },
  ],
});
