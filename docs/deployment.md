# 部署与交付说明

## Netlify 网站

仓库根目录的 `netlify.toml` 已配置为发布 `web/`。项目是纯静态站点，不需要安装依赖，也不需要构建命令。

- Netlify 项目：<https://app.netlify.com/projects/ruitu-jiaosu-demo>
- 公开地址：<https://ruitu-jiaosu-demo.netlify.app>
- GitHub 仓库：<https://github.com/bbbkawaii/guochuang>

### 从 GitHub 持续部署

1. Netlify 项目中打开 **Project configuration → Build & deploy**。
2. 连接 GitHub 仓库 `bbbkawaii/guochuang`，生产分支选择 `main`。
3. Build command 留空，Publish directory 填写 `web`。
4. 触发首次部署；以后推送到 `main` 时即可自动发布。

### 手动部署

也可以把 `web/` 目录直接拖入 Netlify 的 Deploys 页面。仓库中的小程序目录不会被发布到网站。

## 微信小程序

1. 微信开发者工具中选择“导入项目”。
2. 项目目录选择 `miniprogram/`。
3. 演示阶段可使用 `touristappid`；正式发布时，把 `project.config.json` 中的 `appid` 换成正式 AppID。
4. 当前“共创意向 / 研学打卡”为本地演示功能，仅写入 `wx.setStorageSync`，未接入服务器。
5. 正式上线前还需配置服务类目、隐私保护指引、合法域名、后端接口和内容审核流程。

## 本地网页预览

```bash
python3 -m http.server 4173 --directory web
```

浏览器打开 `http://localhost:4173`。

## 重新生成 SVG 视觉资产

```bash
python3 scripts/generate_vector_assets.py
python3 scripts/validate_project.py
```
