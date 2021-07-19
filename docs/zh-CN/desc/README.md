---
permalink: zh-CN/desc.html
tags:
  - 联系
  - 鉴权
  - 限流
---

# 接口说明


## 网址

[https://dev.hamzone.cn/v1/](https://dev.hamzone.cn/v1/)

## 鉴权
* 如果您已有 [社区](https://bbs.hamzone.cn) 的账号并完成手机号码验证，请继续下一步，否则：
    * 需要先前往 [HamZone 社区](https://bbs.hamzone.cn) 注册账号
    * 完成手机号码验证
* 在 [个人账户](https://bbs.hamzone.cn) 页面，获取 `user_id` 及 `app_secret`
* 每次请求时，请跟随 `header` 请求，携带 `Authorization`，完成 `HTTP` 基本验证，格式如下
    * `user_id:app_secret`

## 限流
* 接口限制请求 `60次/分钟`
* 你可以在 `Response Headers` 中查看
    * `x-ratelimit-limit:60`
    * `x-ratelimit-remaining:59`
