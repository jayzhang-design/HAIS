# HAIS 交付与发布说明

## 交付内容

整个 HAIS-handoff 文件夹可独立使用。HAIS-handoff.zip 是相同内容的压缩包。没有 Git 历史、本机日志、内部设计记录、原始头像备份或本机防火墙脚本。
头像和用户名称使用当前版本：HAIS / Jay Zhang。

## 本地查看

1. 安装 Node.js 的当前 LTS 版本。
2. 解压后进入 HAIS-handoff 文件夹，在该目录打开终端。
3. 执行 `npm start`，打开 http://127.0.0.1:4173 。
4. 如果端口被占用，执行 `node server.js --port 18474`，访问 http://127.0.0.1:18474 。
5. Ctrl+C 关闭服务。不要直接双击 index.html，模块脚本需要通过 HTTP 加载。

没有第三方运行依赖，无需 npm install。执行 `npm test` 检查规则；执行 `npm run build` 生成网页发布文件 dist/。

## 发布到 GitHub Pages

1. 在自己的 GitHub 账户创建空仓库（例如 hais）。GitHub Free 可使用公开仓库发布 Pages；公开仓库中的源码和头像可被访问。
2. 将此文件夹所有文件上传到仓库根目录，保留 `.github/workflows/pages.yml`，不要再套一层 HAIS-handoff 文件夹。默认分支使用 main。
3. 推荐用 GitHub Desktop：选择 File → Add local repository → Choose，再按提示创建本地仓库，提交全部文件并 Publish repository。公开发布时取消 Keep this code private。也可在 GitHub 网页上传文件，但必须检查 .github 文件夹是否完整上传。
4. 仓库 Settings → Pages → Build and deployment → Source，选择 GitHub Actions。
5. Actions → Publish HAIS → Run workflow → main → Run workflow。首次上传时尚未开启 Pages，自动发布可能失败；开启后手动运行即可。
6. 等待 build 和 deploy 都成功，在 Settings → Pages 或该任务的 github-pages 环境中复制实际地址。一般为 https://用户名.github.io/仓库名/ 。
7. 用该地址检查头像、发送提问、预警、二次确认、两种回复、普通回复和手机布局，再分享。

页面不需要原作者电脑在线，也不需要开本地端口或安装防火墙规则。尚未在接收方 GitHub 账户实际部署；最终地址由该账户生成。

## 日常维护

- 替换头像：保持 `logo/logoface.jpg` 同名 JPEG，再提交上传。线上需等发布完成后刷新。
- 修改用户名称：编辑 index.html 中的 Jay Zhang。
- 修改风险内容：编辑 scenarios.js；匹配规则在 rules.js，修改后运行 npm test。
- 修改普通回复：编辑 normal-replies.js。
- 更新网页：提交到 main，自动测试和发布。无需手工上传 dist/。
- 其他分支名：修改 pages.yml 中 branches；推荐保持 main。
- 页面刷新后对话重置；不保存用户输入。
- 网站说明与技术实现边界见 docs/IMPLEMENTATION.md；风险措辞依据见 docs/risk-catalogue.md。

## 发布排查

- Actions 找不到 Publish HAIS：检查工作流路径、默认分支、Actions 是否启用。
- 发布权限或 Pages 配置错误：检查 Settings → Pages 是否选择 GitHub Actions，以及 github-pages 环境是否允许 main 部署。
- 地址 404：等待部署成功，用 Pages 显示的完整地址（含仓库名），不要使用 github.com 的源码地址。
- 头像未更新：等自动部署完成后强制刷新。
- 无需重新配置电脑局域网地址。

官方指南：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
