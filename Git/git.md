###删除

远程分支：

```git push origin --delete <BranchName> ```

删除本地分支：

```git branch -d <BranchName> ```

###创建

本地创建分支提交到远程：

```git push --set-upstream origin <BranchName>```

合并冲突之后 ```add  commit```

###拉取

拉取指定分支的代码：```git pull <远程主机名> <远程分支名>:<本地分支名> ```

设置代理：```set http_proxy=http://172.17.18.80:8080```

###关联

将本地分支与远程分支进行关联：

 ```git branch --set-upstream-to=origin/develop yaoxxxyao```

###推送

```git push  主机名  本地分支名 ： 远程分支名```

如果失败：尝试

```git config --system --unset credential.helper``` 输入账号密码后再推送

###比较

本地分支：``` diff branchA branchB```

远程分支的话，```git diff branchA remoteB/branchB```

### 版本切换

版本的切换：```git reset --hard commit_id(head^x)```（x代表回退几个版本）

```git log```可以查看提交历史，以便确定要回退到哪个版本

```git reflog```查看命令历史，来确定要回到未来哪个版本