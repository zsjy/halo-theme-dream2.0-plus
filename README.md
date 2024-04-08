<p align="center">
<img src="https://cdn.jsdelivr.net/gh/nineya/halo-theme-dream2.0/screenshot.png" alt="halo-theme-dream2.0" width="180">
</p>
<h1 align="center">halo-theme-dream2.0</h1>

<p align="center">
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="releases" src="https://img.shields.io/github/release/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/zsjy/halo-theme-dream2.0-plus?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/releases"><img alt="downloads" src="https://img.shields.io/github/downloads/zsjy/halo-theme-dream2.0-plus/total.svg?style=flat-square"/></a>
<a href="https://github.com/zsjy/halo-theme-dream2.0-plus/commits"><img alt="commits" src="https://img.shields.io/github/last-commit/zsjy/halo-theme-dream2.0-plus.svg?style=flat-square"/></a>
</p>

本仓库为 `Halo 2.x` 主题仓库，如果你使用的是 `Halo 1.x` ，请前往：https://github.com/nineya/halo-theme-dream

## Plus版

- 文档：https://www.sw0.top/docs/halo-theme-dream2.0



## 版本适配关系

| 主题版本    | 适配Halo版本                | 测试用Halo版本 |
| ----------- | --------------------------- | -------------- |
| x.x      | 2.6.0+ | 2.14.0      |



## 安装 & 更新

1. 进入主题 `Release` 界面：https://github.com/zsjy/halo-theme-dream2.0-plus/releases 下载主题压缩包 `halo-theme-dream2.0-plus.zip` 压缩包文件；
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
