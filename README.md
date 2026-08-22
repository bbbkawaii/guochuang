# 瑞土酵生展示网站与原生微信小程序

本仓库包含：

- `web/`：响应式宣传网站，Netlify 发布目录。
- `miniprogram/`：原生微信小程序，可直接导入微信开发者工具。

## 本地预览网站

```bash
python3 -m http.server 4173 --directory web
```

## 小程序

微信开发者工具导入 `miniprogram/`。当前 `appid` 使用 `touristappid`，正式发布时替换为团队 AppID。
