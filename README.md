# 瑞土酵生 · 比赛展示网站与原生微信小程序

> 农废酵素循环生态种植 + 农产年轻化深加工乡村振兴方案

本仓库是“瑞土酵生”比赛演示端，包含一套响应式宣传网站和一套原生微信小程序。两端统一使用“松柏绿 + 土壤棕 + 麦穗金 + 米白”视觉系统，完整讲述项目缘起、农废循环、发酵机理、成果口径、创意产品、瑞溪村故事与共创路径。

## 在线演示

- Netlify 网站：<https://ruitu-jiaosu-demo.netlify.app>
- GitHub 仓库：<https://github.com/bbbkawaii/guochuang>
- 微信小程序：将 `miniprogram/` 直接导入微信开发者工具

## 项目结构

```text
.
├── web/                         # Netlify 静态网站
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── assets/                  # SVG 插画、图表与标识
├── miniprogram/                 # 原生微信小程序
│   ├── app.js / app.json / app.wxss
│   ├── pages/
│   │   ├── home/                # 首页、循环链路、产品与场景
│   │   ├── story/               # 项目痛点、瑞溪村与协作主体
│   │   ├── tech/                # 三阶段、酸菌协同与工坊流程
│   │   ├── result/              # 成果、成本示例与证据边界
│   │   └── join/                # 共创意向与研学打卡演示
│   └── utils/
├── scripts/
│   ├── generate_vector_assets.py # 重新生成统一 SVG 视觉资产
│   └── validate_project.py       # 检查引用、JSON、JS 与 WXML
├── docs/                        # 来源口径、部署说明和赛前清单
└── netlify.toml
```

## 网站特性

- 纯 HTML、CSS、JavaScript，无框架、无 npm 构建依赖
- 桌面端、平板和手机端响应式布局
- 发酵三阶段交互、数字动画、插画和图表弹窗
- 清晰区分“培训材料案例”“团队测算”“瑞溪村待补充实测”
- SEO、Open Graph、PWA 基础清单与安全响应头
- 所有公开视觉均为可编辑 SVG，不依赖私有照片或外部图床
- Netlify 发布目录已配置为 `web/`

本地预览：

```bash
python3 -m http.server 4173 --directory web
```

浏览器打开 `http://localhost:4173`。

## 原生微信小程序

1. 微信开发者工具中选择“导入项目”。
2. 项目目录选择本仓库的 `miniprogram/`。
3. `project.config.json` 当前使用 `touristappid`，可直接游客模式预览；正式发布前替换为团队 AppID。
4. 小程序不依赖 uni-app、Taro、WePY 或 npm 包，页面与视觉均为原生 WXML、WXSS、JavaScript。
5. “共创意向”与“研学打卡”为演示交互，只写入本机 `wx.setStorageSync`，不会上传个人信息。

## 内容与数据口径

内容依据团队提供的《兰考县酵素技术培训会》课件、《国创赛分工》、`瑞溪村简介` 与“瑞土酵生数据图片”整理：

- `90%+、60%+、8–20%、1000+` 为培训材料汇总的跨区域案例数据；
- 农废资源化、化肥农药减量、产品溢价等部分指标为团队方案目标或测算；
- 产品外观、研学流程、收益分配和阶段路线属于比赛概念设计；
- 瑞溪村本地农残、土壤、成本、产量和用户测试仍需以正式报告与合作证明复核。

详见 [`docs/content-sources.md`](docs/content-sources.md) 与 [`docs/competition-checklist.md`](docs/competition-checklist.md)。

## 视觉资产

公开仓库不包含团队课件中的原始人物照片、田间照片或截图。网站 SVG 插画和图表由 `scripts/generate_vector_assets.py` 统一生成，既保持项目风格一致，也避免把概念场景误作瑞溪村实拍。需要重新生成时运行：

```bash
python3 scripts/generate_vector_assets.py
```

## 项目检查

```bash
python3 scripts/validate_project.py
node --check web/app.js
```

源代码和原创 SVG 设计按 MIT License 发布；项目名称、事实数据、合作标识与第三方材料仍受各自权利约束，详见 [`ASSET-NOTICE.md`](ASSET-NOTICE.md)。
