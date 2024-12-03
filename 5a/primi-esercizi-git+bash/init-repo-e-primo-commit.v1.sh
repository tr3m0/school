#!/bin/bash

git init repo_esercizio
cd repo_esercizio

touch README.md
echo "my first repo" > README.md

git add README.md

git commit -m "First commit"
