import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击启动页广告的跳过按钮',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: ['com.zhihu.android.app.ui.activity.LauncherActivity'],
          matches: '[id="com.zhihu.android:id/btn_skip"][clickable=true]',
        },
      ],
    },
  ],
});
