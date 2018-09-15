项目工程目录
├──  config                       # 项目配置目录
│   ├── index.js                 # 配置项目中的配置信息
│   ├── config.json            # 数据库连接的配置
├──  models                       # 数据库 model
│   ├── index.js                 # 数据库连接的样板代码 # model 入口与连接
│   ├── goods.js                 # 商品表
│   ├── shops.js                 # 店铺表
├── migrations                   # 数据迁移的目录
├── seeders                        # 数据填充的目录
├── node_modules                 # node.js 的依赖目录
├──  plugins                      # 插件目录
│ ├── hapi-swagger.js             # wagger 配置插件
│ ├── hapi-pagination.js          # pagination 配置插件
│ ├── hapi-auth-jwt2.js           # jwt 配置插件
├──  routes                       # 路由目录
│   ├── hello-world.js           # 测试接口 hello-world
├── utils                        # 工具类相关目录
│ ├── router-helper.js          # 一个 helper 的工具类来实现公共代码
├──  app.js                       # 项目入口文件
├── package.json                 # JS 项目工程依赖库
├── readme.md                    # 项目工程如何被使用的说明手册

2018-9-15 10:41:49

