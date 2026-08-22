# 瑞土酵生

农废酵素循环生态种植 + 农产年轻化深加工乡村振兴方案。

## 项目内容

- `web/`：比赛展示网站，使用高清栅格配图，无 SVG 示意图。
- `miniprogram/`：原生微信小程序，包含首页、技术、产品、瑞溪村与共创页面。
- `netlify.toml`：网站静态发布配置，发布目录为 `web/`。

## 本地预览

```bash
python3 -m http.server 4173 --directory web
```

微信小程序可直接用微信开发者工具导入 `miniprogram/`。
