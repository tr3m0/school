#!/bin/bash

git init repo_esercizio
cd repo_esercizio

touch README.md
echo "My first repo" > README.md

git add README.md

git commit -m $1
