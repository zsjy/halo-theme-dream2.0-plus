<h1 align="center">halo-theme-dream2.0-plus</h1>

<p align="center">
<a href="https://github.com/halo-dev/halo"><img alt="Halo version" src="https://img.shields.io/badge/halo-2.21.0%2B-brightgreen?style=flat-square" /></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="releases" src="https://img.shields.io/github/release/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/zsjy/halo-theme-dream2.0-plus?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="downloads" src="https://img.shields.io/github/downloads/zsjy/halo-theme-dream2.0-plus/total.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/commits"><img alt="commits" src="https://img.shields.io/github/last-commit/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
<a href="https://afdian.com/a/org-hcjike"><img alt="donate" src="https://img.shields.io/badge/$-donate-ff69b4.svg?style=flat-square"/></a>
</p>

本仓库为 `Halo 2.x` 主题仓库。

## [主题预览](https://www.hcjike.com/?preview-theme=theme-dream2-plus)

## [主题文档](https://www.hcjike.com/docs/halo-theme-dream2.0)
**温馨提示：若您遇到问题，请首先查阅相关文档。对于文档中已明确说明的事项，将不再另行答复。**

## 开发中功能
- 开发中功能已发布为[预发行版](https://github.com/zsjy/halo-theme-dream2.0-plus/releases)，开发中的功能不保证留存到正式版，包括但不限于：主题配置位置、配置方式、页面样式等等。

## 版本适配关系

| 主题版本    | 适配Halo版本 | 测试用Halo版本 |
| ----------- |----------| -------------- |
| x.x      | 2.21.0+  | 2+     |



## 安装 & 更新

1. 进入主题 [Release](https://github.com/zsjy/halo-theme-dream2.0-plus/releases/latest) 界面，下载主题压缩包 `theme-dream2-plus-xxx.zip` 压缩包文件，`xxx` 为版本号；
2. 进入博客后台管理 `主题->主题管理->安装主题`，选择下载的 `theme-dream2-plus-xxx.zip` 安装包进行上传；
3. 等待安装完成；
4. 更新方法同上。



## 参与主题开发

1. 开发环境准备
    - 安装 `nodejs` 版本需要在 `15+`，建议使用 `22+`；
    - 主题目录下执行 `npm i` 安装依赖；
    - 开发时建议使用 `npm run dev` 进行打包，用于安装调试，此命令无需手动修改版本号，每次打包都会自动更新版本号；
    - 提交PR时，如非必要请不要提交 `theme.yaml`、`package.json`、`package-lock.json`、`.eslintrc.js` 文件；


2. npm 命令
   
    - `npm run lint` 执行代码风格校验。
    - `npm run zip` 执行安装包打包，在无须重新编译 `js/css` 时使用。

    - `npm run build-res --tag=$version` 用于编译特定版本资源，在工作流中发布npm使用，主题中 `src` 目录下的 `js` 和 `css` 文件将会被编译为 `assets` 目录下的文件，同时 `assets` 目录下的文件将会被更新。
    - `npm run dev` 执行主题打包操作，根据执行时间打包生成 `0.0.yyyyMMddHHmmss` 格式的版本号，用于测试环境安装调试。

    - `npm run build` 执行主题打包操作，主题将被打包为压缩包文件存放在 `dist/` 目录下，同时 `assets` 目录下的文件也将被更新。
    - `npm run build --devel` 开发模式进行主题打包，`js` 和 `css` 不会被做压缩和混淆处理，方便排查问题。
    - `npm run release --tag=$version` 发布模式执行主题打包操作，将自动更新主题中的版本号，并使用这个版本标签重新创建  `FreeCDN` 清单文件。

## 打赏项目

感谢您对本项目的喜爱，您的打赏是对本项目最好的支持！

[爱发电(唯一赞助)](https://afdian.com/a/org-hcjike)

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=zsjy/halo-theme-dream2.0-plus&type=Date)](https://www.star-history.com/#zsjy/halo-theme-dream2.0-plus&Date)
