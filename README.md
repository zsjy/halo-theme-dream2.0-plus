<h1 align="center">halo-theme-dream2.0-plus</h1>

<p align="center">
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="releases" src="https://img.shields.io/github/release/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/zsjy/halo-theme-dream2.0-plus?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="downloads" src="https://img.shields.io/github/downloads/zsjy/halo-theme-dream2.0-plus/total.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/commits"><img alt="commits" src="https://img.shields.io/github/last-commit/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
<a href="https://ifdian.net/a/org-zsjy"><img alt="donate" src="https://img.shields.io/badge/$-donate-ff69b4.svg?style=flat-square"/></a>
</p>

本仓库为 `Halo 2.x` 主题仓库。

## [主题预览](https://www.hcjike.com/?preview-theme=theme-dream2-plus)

- [主题文档](https://www.hcjike.com/docs/halo-theme-dream2.0) 
- [侧边栏组件](https://www.hcjike.com/docs/halo-theme-dream2.0/theme/sidebar-assembly)

## 插件相关
### KaTeX
- 安装并启用`KaTeX插件`，插件配置如下；
  - 行内公式 CSS 选择器：`[math-inline],.math-inline,.katex--inline`；
  - 块级公式 CSS 选择器：`[math-display],.math-display,.katex--display`。

### highlight.js 代码高亮
- 安装并启用`highlight.js 代码高亮`插件，插件配置如下；
  - **开启**`启用主题侧渲染`；
  - 页面规则添加`/**`，匹配所有页面；
  - **不开启**`显示复制按钮`，主题端已提供复制按钮，不需要额外开启。

### 智阅GPT-智能AI摘要
- 不支持`pjax`
- 文章选择器：`.article`
- 样式选择器：`night`

## 主题功能配置
### 开启ServiceWorker配置
[Deam2 Plus主题开启ServiceWorker配置的方法](https://www.hcjike.com/archives/slrrTp6c)

### 网站添加 PWA 配置
[网站添加 PWA 配置，使网站支持像应用一样安装](https://www.hcjike.com/archives/MNdz7kZ6)


## 开发中功能
- 开发中功能已发布为[预发行版](https://github.com/zsjy/halo-theme-dream2.0-plus/releases)，开发中的功能不保证留存到正式版，包括但不限于：主题配置位置、配置方式、页面样式等等。

## 关于PR
- 感谢PR，改善主题；
- 将PR提交到dev分支中

## 版本适配关系

| 主题版本    | 适配Halo版本 | 测试用Halo版本 |
| ----------- |----------| -------------- |
| x.x      | 2.20.0+  | 2+     |



## 安装 & 更新

1. 进入主题 [Release](https://github.com/zsjy/halo-theme-dream2.0-plus/releases/latest) 界面，下载主题压缩包 `halo-theme-dream2.0-plus.zip` 压缩包文件；
2. 进入博客后台管理 `主题->主题管理->安装主题`，选择下载的 `halo-theme-dream2.0-plus.zip` 安装包进行上传；
3. 等待安装完成；
4. 更新方法同上。



## 参与主题开发

1. 开发环境准备
    - 安装 `nodejs` 版本需要在 `15+`；
    - 主题目录下执行 `npm i` 安装依赖。

2. npm 命令
   
    - `npm run lint` 执行代码风格校验。
    - `npm run zip` 执行安装包打包，在无须重新编译 `js/css` 时使用。
    
    - `npm run build` 执行主题打包操作，主题将被打包为压缩包文件存放在 `dist/` 目录下，同时 `source` 目录下的文件也将被更新。
    - `npm run build --devel` 开发模式进行主题打包，`js` 和 `css` 不会被做压缩和混淆处理，方便排查问题。
    - `npm run release --tag=$version` 发布模式执行主题打包操作，将自动更新主题中的版本号，并使用这个版本标签重新创建  `FreeCDN` 清单文件。
