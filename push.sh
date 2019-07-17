#!/bin/sh

git config --global user.email "ci@koenvangilst.nl"
git config --global user.name "Circle CI"

git add --all
git commit --message "[skip ci] Circle CI: add line for size"

git push https://${GH_TOKEN}github.com/vnglst/size-of-npm.git