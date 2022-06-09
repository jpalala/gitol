# gitol

git oneliners

```bash
  npm install -g gitol
```

## how to use

`gitol` then append any of these options:

 - `-g/--guilt` Shortcut to `git guilt HEAD~1 HEAD`
 - `-l/--log` Shortcut to `git log --pretty=format:"%h - %an, %ar : %s"`

## why error when calling from commandline?

i honestly do not know. for now just clone the repo instead and make an alias to /usr/local/bin to the cli.js script? 
