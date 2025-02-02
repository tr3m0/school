#!/bin/bash

repo="branchRepoLog"
rm -rf $repo
git init $repo
cd $repo

for i in $(seq 1 8); do
	touch "file${i}.txt"
	git add "file${i}.txt"
	if [ $((i % 2)) -eq 0 ]; then #commits every two files
		iteration=$((i / 2))
		branch="BF${iteration}"
		git commit -m "main_C${iteration}"
		git branch $branch
		git checkout $branch
		for j in $(seq 1 $iteration); do
			touch "${branch}_file${j}.txt"
			git add "${branch}_file${j}.txt"
			git commit -m "${branch}_C${j}"
		done
		git checkout main
	fi
done

touch "lastFile.txt"
git add "lastFile.txt"
git commit -m "EndCommit"

echo "Repo setup DONE!"

git log --all --oneline --graph
