> wp_MusicApi 一个荒野拾荒者的 API



![](https://img.shields.io/badge/最新版本-v1.1-green)

[![](https://img.shields.io/badge/QQ群1-922193759-green)](https://jq.qq.com/?_wv=1027&k=3USa76OC)



## 公告



## 新版特性

1. 相对更加稳定,服务器不再过滤参数内容,用户自行解析参数,减少参数解析出错几率
2. 支持平台：QQ 音乐,酷狗音乐,酷我音乐,咪咕音乐，具体音乐音质支持往下看
3. 接口更加丰富,增加部分接口和平台
4. 降低门槛,参数简单统一,支持 GET 请求,支持跨域调用



## 工作原理

跨站请求伪造 (CSRF), 伪造请求头 , 调用官方 API



## 捐赠

项目开源



## 关于项目

wp_MusicApi 拾荒者的音乐接口



## 用户须知

!> 考虑到性能问题，可以使用专门服务器与本项目对接，例如`nginx`，具体的搭建方法还请用户自行百度，这里不做演示

!> 该项目仅做接口转发，部分接口通过修改 `Referer` 实现，所有数据均不做存储处理，部分接口采用缓存，大家还是理性的保护好自己的个人信息，谨防诈骗

!> QQ音乐登陆的这个问题还是难绕过去，目前还是需要登陆获取 https://y.qq.com 的 `cookie`，注入本项目， 如果又什么更好的解决办法，欢迎大家提 pr 给我

!> 咪咕音乐不提供登录内容，具体后期再不断完善

!> 目前本项目刚刚开始，只提供QQ、咪咕、酷我、酷狗两大音乐平台部分接口，后期再不断完善

!> 本项目仅供学习使用,请尊重版权，请勿利用此项目从事商业行为



## 免责申明

1. 以上开发接口仅限于技术研究和项目开发练习使用，禁止商业用途，如有发现直接关闭服务
2. 音乐版权归各音乐平台所有，若有侵犯版权，请联系我删除

