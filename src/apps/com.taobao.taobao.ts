import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '活动弹窗',
      desc: '关闭淘宝各页面中同类容器内的活动弹窗',
      rules: [
        {
          matches:
            '[vid="poplayer_native_state_center_layout_frame_id"] > [desc="关闭按钮"][clickable=true]',
        },
      ],
    },
  ],
});
