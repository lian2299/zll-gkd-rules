import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 1,
      name: '跳过勋章通知',
      desc: '关闭勋章通知',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '@ImageView < ViewGroup <2 ViewGroup < ViewGroup < ScrollView <2 ViewGroup < ViewGroup <2 ViewGroup <2 ViewGroup < FrameLayout < RelativeLayout <3 [vid="mapInteractiveRelativeLayout"]',
        },
      ],
    },
  ],
});
