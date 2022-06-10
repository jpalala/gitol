# gitol

GIT OneLiners

```bash
  npm install -g gitol
```

## usage

`gitol -g/-l` 

### oneliner git guilt

`-g/--guilt` calls `git guilt HEAD~1 HEAD`

### oneliner git pretty Log

`-l/--log` calls `git log --pretty=format:"%h - %an, %ar : %s"`

### oneliner git config user and email globally

`-c/--config <Your name> <email>` without quotes will call `git config user.name <Your name> && git config --global user.email <email>`  
