#!/bin/sh

du -sh node_modules >> size.txt

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git clone https://github.com/vnglst/size-of-npm.git
git checkout $TRAVIS_PULL_REQUEST_BRANCH
git add --all
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git push