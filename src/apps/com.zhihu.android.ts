import { defineGkdApp } from '@gkd-kit/define';

// 本地规则组 1–9 迁移为 101–109，保留已发布的规则组 1、2。
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
    {
      key: 2,
      name: '广告关闭按钮',
      desc: '点击 FrameLayout 内尺寸为 42×42 像素的 ImageView 广告关闭按钮；默认关闭，避免与更具体的广告规则重复触发',
      rules: [
        {
          matches: 'FrameLayout ImageView[width=42][height=42]',
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
      enable: false,
    },
    {
      key: 101,
      name: '知乎答案下卡片广告1',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: [
            '@ImageView < ViewGroup <4 ViewGroup < ViewGroup < FrameLayout <4 [vid="custom_recycler_view"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 102,
      name: '知乎答案下卡片广告2',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: [
            '@ImageView < ViewGroup <5 ViewGroup < ViewGroup < FrameLayout <5 [vid="custom_recycler_view"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 103,
      name: '知乎答案下游戏广告。',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: [
            '@ImageView < ViewGroup <5 ViewGroup <3 ViewGroup < FrameLayout <3 [vid="custom_recycler_view"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 104,
      name: '知乎答案下卡片广告3',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: [
            '@ImageView < ViewGroup <4 ViewGroup < ViewGroup < FrameLayout <6 [vid="custom_recycler_view"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 105,
      name: '知乎答案下卡片广告4',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: ['[vid="btn_skip"]'],
          fastQuery: true,
          activityIds: ['com.zhihu.android.app.ui.activity.LaunchAdActivity'],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 106,
      name: '知乎答案下卡片广告5',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: ['[vid="btn_close"]'],
          fastQuery: true,
          activityIds: ['com.zhihu.android.app.ui.activity.MainActivity'],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 107,
      name: '知乎答案下卡片广告6',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: [
            '@ImageView[width=42][height=42] < ViewGroup <3 ViewGroup <4 ViewGroup < FrameLayout <2 [vid="recycler"]',
          ],
          fastQuery: true,
          activityIds: ['com.zhihu.android.ContentActivity'],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 108,
      name: '答案流中的广告 2',
      desc: '匹配广告关闭按钮；反馈面板出现时暂停点击',
      rules: [
        {
          matches: [
            '@ImageView < ViewGroup <4 ViewGroup < ViewGroup < FrameLayout <2 [vid="recycler"]',
          ],
          fastQuery: true,
          activityIds: ['com.zhihu.android.ContentActivity'],
          matchRoot: true,
          excludeMatches: ['[vid="tv_content"][text="内容不感兴趣"]'],
        },
      ],
    },
    {
      key: 109,
      name: '关闭答案流中的广告，二次确认',
      desc: '广告反馈面板出现后，选择内容不感兴趣',
      rules: [
        {
          matches: ['[vid="tv_content"][text="内容不感兴趣"]'],
          fastQuery: true,
          activityIds: ['com.zhihu.android.ContentActivity'],
          matchRoot: true,
          order: -1,
          actionDelay: 300,
        },
      ],
    },
  ],
});
