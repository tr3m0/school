#!/bin/bash

repo="mergeRepo"
git init $repo
cd $repo

for f in A B C; do
	file="file${f}.txt"
	touch $file
	echo $f > $file
	git add $file
done

git commit -m "Added files A, B and C"

git branch feature1
git branch feature2

for i in 1 2; do
	git checkout "feature${i}"
	for f in A B; do
		echo "change of ${f} in feature${i}" > "file${f}.txt"
		git add "file${f}.txt"
	done
	git commit -m "changes in feature${i}"
done

git checkout main

git merge feature1
git merge feature2

nano fileA.txt
nano fileB.txt

git add fileA.txt fileB.txt

git commit -m "last commit"

git log --all --oneline --graph
