# A sensible starting point for angular based single page apps

* Jade for markup
* Sass for styles
* Module based directory structure

## Serve it locally 

```
grunt watch:all
```

## Run tests

```
grunt watch:test
```

## Build a minified release

```
grunt release
```

## Install

```
npm install
bower install
```

## Bonus Round

Here's a reasonable tmux configuration for this project

```
# ~/.tmuxinator/angularstarter.yml

name: angularstarter
root: ~/Sites/angularStarter

windows:
  - editor:
      layout: main-vertical
      panes:
        - vim
        - grunt watch:test
        -
  - webdriver: webdriver-manager start
  - server: grunt watch:all
  - irssi: irssi
```
