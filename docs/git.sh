#!/bin/sh

set -e

git add .

git commit -m 'deploy'

git push
