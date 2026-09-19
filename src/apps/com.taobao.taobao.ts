import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '首页活动弹窗',
      desc: '关闭首页优惠券等活动弹窗',
      rules: [
        {
          activityIds: ['com.taobao.tao.welcome.Welcome'],
          matches:
            '[vid="poplayer_native_state_center_layout_frame_id"] > [desc="关闭按钮"][clickable=true]',
        },
      ],
    },
  ],
});
