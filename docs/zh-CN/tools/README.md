---
meta:
  - name: description
    content: 业余无线电考试题库，卫星轨道运行数据，TLE数据，业余无线电开放接口，HamZone开放接口，HamZone.cn开放接口
  - name: keywords
    content: 业余无线电考试题库,业余无线电考试题库接口,TLE数据,TLE,HamZone文档介绍,HamZone开放接口,HamZone开放平台,HamZone开发者,HamZone,HamZone.cn,HamZoneDev,Radio,HamZoneAPI,API,开放接口,AmateurRadio,浩奇,浩奇科技,HatchTech,Hatch
permalink: zh-CN/tools.html
tags:
  - 工具
  - 卫星
  - TLE
---

# 工具

::: tip 提示
工具类接口
:::

## :radio: 业余无线电考试题库
### 用途  

  将 [CRAC](http://www.crac.org.cn/Home/Index) 给出的业余无线电考试题库(A/B/C)转化为 `json` 格式，方便爱好者二次开发。
### 接口说明 
* 数据来源：[CRAC](http://www.crac.org.cn/Home/Index)。
* 这是一份对应的 `SQL` 文件：[github.com/HamZone/Database](https://github.com/HamZone/Database/blob/main/Exam/v20210222/Exam_v2102.sql)。

### 所有题库
* 地址
  * `https://dev.hamzone.cn/v1/tools/exam/{level}/all.json`
* Method
  * `GET`
* 参数
  | Property   | Type   | E.g. | Required           | Description                                  |
  | ---------- | ------ | ---- | ------------------ | -------------------------------------------- |
  | level | String |   A   | :heavy_check_mark: | 题库对应等级，A/B/C 大小写均可 |
* 响应案例
  * 成功
  ::: details 点击查看
  ```json
  {
    "code": 200,
    "status": true,
    "data": {
        "version": "v20210222",
        "origin": "CRAC",
        "data": [
            {
                "id": 1,
                "serial": "LK0001",
                "question": "我国现行法律体系中专门针对无线电管理的最高法律文件及其立法机关是：",
                "img_name": null,
                "img_url": null,
                "subject": {
                    "a": "中华人民共和国无线电管理条例，国务院和中央军委",
                    "b": "中华人民共和国无线电管理办法，工业和信息化部",
                    "c": "中华人民共和国电信条例，国务院",
                    "d": "中华人民共和国业余无线电台管理办法，工业和信息化部"
                },
                "answer_option": "a"
            },
            ...
          ]
    }
  }
  ```
  :::
* 失败
  ::: details 点击查看
  ```json
  {
    "code": 406,
    "status": false,
    "errors": {
        "message": "不存在对应等级题库",
        "documentation_url": ""
    }
  }
  ```
  :::

## :artificial_satellite: TLE 数据
### 用途 

  TLE（两行轨道数据，卫星星历），由美国 CelesTrak 发明创立。可以用来分析绕地运行空间目标轨道信息，通过解析 TLE 数据，使用合适的预测模型，例如 `SGP4` 模型，即可得到运行空间目标的经纬度、高度、速度等信息，还可以通过给定观察者的位置，给出角度、到达时间等计算，实现轨道预测等功能。  
  
### 接口说明
  * 接口数据来源：[CelesTrak](https://celestrak.com/) 。
  * 接口 30 分钟从 `CelesTrak` 刷新一次缓存在服务器。
  * 返回对应的 TLE 数据，并进行解析。

### 分类请求
* 地址
    * `https://dev.hamzone.cn/v1/tools/satellite/tle/{cate}.json
`
* Method
    * `GET`
* 参数
  | Property   | Type   | E.g. | Required           | Description                                  |
  | ---------- | ------ | ---- | ------------------ | -------------------------------------------- |
  | cate | String |   SpaceStation   | :heavy_check_mark: |  |

* 目前可以请求的 `cate` 有：

    | Cate | Description |
    |---|---|
    | `Amateur`| 业余无线电相关卫星 |
    |`ISS` | 国际空间站 |
    | `StarLink`| 星链 |
    |`SpaceStation` | 空间站 |
    | `Last30Days`| 最近一个月发射 |
    | `Weather`| 气象卫星 |
    | `NOAA`| 美国国家海洋大气局气象观测卫星 |
    | `Resource`| 地球资源技术卫星 |
    | `Sarsat`| 全球卫星搜救系统 |

* 响应案例
  * 成功
  ::: details 点击查看
  ```json
  {
    "code": 200,
    "status": true,
    "data": [
      {
        "title" : "ISS",
        "sat_name" : "ZARYA",
        "noradid" : "25544",
        "tle" : {
          "one" : "1 25544U 98067A   21187.46697458  .00000431  00000-0  16068-4 0  9991",
          "two" : "2 25544  51.6441 247.3821 0002094 139.8380 359.0994 15.48767607291582",
          "one_parse" : {
            ...
          },
          "two_parse" : {
            ...
          }
        },
      },
      ...
    ]
  }
  ```
  :::
  
  * 失败  
  ::: details 点击查看
  ```json
  {
    "code": 406,
    "status": false,
    "errors": {
        "message": "This satellite category data was not found.",
        "documentation_url": ""
      }
  }
  :::