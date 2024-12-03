#!/bin/bash

git init MergeRepo

for i in $(seq 1 3); do
	touch "file$i.txt"
	git add "file$i.txt"
	git commit -m "Added file$i.txt"
done

git branch featureA
git branch featureB

git checkout featureA

echo "branch featureA" > file2.txt

git checkout featureB
echo "branch featureB" > file2.txt

git checkout master
git merge featureA
git merge featureB
