<h1 align="center">halo-theme-dream2.0-plus</h1>

<p align="center">
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="releases" src="https://img.shields.io/github/release/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/zsjy/halo-theme-dream2.0-plus?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="downloads" src="https://img.shields.io/github/downloads/zsjy/halo-theme-dream2.0-plus/total.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/commits"><img alt="commits" src="https://img.shields.io/github/last-commit/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
<a href="https://afdian.net/a/org-zsjy"><img alt="donate" src="https://img.shields.io/badge/$-donate-ff69b4.svg?style=flat-square"/></a>
</p>

本仓库为 `Halo 2.x` 主题仓库，如果你使用的是 `Halo 1.x` ，请前往：https://github.com/nineya/halo-theme-dream

## [预览地址](https://www.sw0.top/)

- [主题文档](https://www.sw0.top/docs/halo-theme-dream2.0)
- **V1.1.0版本起不在使用原主题配置文件，因此升级V1.1.0版本后需要重新配置主题，配置一次后，后续升级无需再次配置。**
- [侧边栏组件](https://www.sw0.top/docs/halo-theme-dream2.0/theme/sidebar-assembly)

## 开发中功能
- 点击仓库 [Actions](https://github.com/zsjy/halo-theme-dream2.0-plus/actions) 标签页，找到`dev`分支的工作流，点击对应工作流下载`halo-theme-dream2.0-plus.zip`文件，安装`halo-theme-dream2.0-plus.zip`完成升级。


## 版本适配关系

| 主题版本    | 适配Halo版本 | 测试用Halo版本 |
| ----------- |----------| -------------- |
| x.x      | 2.15.0+  | 2+     |



## 安装 & 更新

1. 进入主题 [Release](https://github.com/zsjy/halo-theme-dream2.0-plus/releases) 界面，下载主题压缩包 `halo-theme-dream2.0-plus.zip` 压缩包文件；
2. 进入博客后台管理 `主题->主题管理->安装主题`，选择下载的 `halo-theme-dream2.0-plus.zip` 安装包进行上传；
3. 等待安装完成；
4. 更新方法同上。



## 参与主题开发

> 推荐使用 IDEA 进行主题开发，能够比较好的支持 FreeMarker。

1. 开发环境准备
    - 安装 `nodejs` 版本需要在 `15+`；
    - 主题目录下执行 `npm i` 安装依赖；

2. npm 命令
   
    - `npm run lint` 执行代码风格校验。
    - `npm run zip` 执行安装包打包，在无须重新编译 `js/css` 时使用。
    
    - `npm run build` 执行主题打包操作，主题将被打包为压缩包文件存放在 `dist/` 目录下，同时 `source` 目录下的文件也将被更新。
    - `npm run build --devel` 开发模式进行主题打包，`js` 和 `css` 不会被做压缩和混淆处理，方便排查问题。
    - `npm run release --tag=$version` 发布模式执行主题打包操作，将自动更新主题中的版本号，并使用这个版本标签重新创建  `FreeCDN` 清单文件。
