## Getting Started

Tool Manager [Volta](https://volta.sh/) を利用する．
Windowsの人はWSLを使用すること。

- 準備:

```shell
# install Volta
$ curl https://get.volta.sh | bash

# install the pinned version of node
$ volta install node

# install the pinned version of yarn
$ volta install yarn

# install dependencies
$ yarn install
```

- サイトの確認:

```shell
# http://localhost:3000 にサーバーが立ち上がり，Preview が見れる．
$ yarn dev
```
