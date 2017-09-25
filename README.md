# kukkoro
A chrome extension which index github's README and more.

## install

Chrome Web Store: https://chrome.google.com/webstore/detail/dngmmnfbdkjdnblljongbpjcldpafbli

## Features


### 1. Table of contents for READMEE

![demo](https://raw.githubusercontent.com/y-takey/kukkoro/master/demo/toc_readme.png)

### 2. History of line numers for codebase

![demo](https://raw.githubusercontent.com/y-takey/kukkoro/master/demo/toc_codebase.png)

## Development

### 1. clone this repository

```
$ git clone https://github.com/y-takey/kukkoro
```

### 2. open `chrome://extensions/` on your google-chrome, then add the extension directory


*This extension is autoloaded when you change then codebase*

## Deploy

### 1. zipping

```
$ zip kukkoro.zip -r ./ -x .git/\* -x demo/\* -x .gitignore -x kukkoro.zip
```

### 2. upload zip file

open the developer dashboard : https://chrome.google.com/webstore/developer/dashboard
