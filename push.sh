#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

echo ${TRAVIS_BRANCH}
git checkout ${TRAVIS_BRANCH}

du -sh node_modules >> size.txt

git add --all
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git push https://${GH_TOKEN}github.com/vnglst/size-of-npm.git