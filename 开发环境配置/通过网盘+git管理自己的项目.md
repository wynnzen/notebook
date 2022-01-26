# 通过网盘+git管理自己的项目

可以选择第三方的私有仓库 github，bitbucket，gitlab等等

也可以通过git+同步盘的方式来管理自己项目的版本

在自己开发的项目的文件夹里面初始化git


```
git init
```

增加文件

```
git add .
```

填写commit信息


```
git commit -m "some commit message"
```

在云盘的同步盘里面建立同步的文件夹然后在文件夹里面建立bare仓库


```
git init --bare
```

在项目里面设定同步的路径


```
git remote add syncDrive file:///pathname
```

> syncDrive 代表你要同步地址的别名
> 
> pathname指的是同步盘里面的文件夹
> 

将master分支推送到同步盘的文件夹即可

```
git push syncDrive master
```


