#!bin/bash

git init fileManagementRepo
cd fileManagementRepo

for i in $(seq 1 3); do
	file="file${i}.txt"
	touch $file
	echo "file ${i} content" > $file
	git add $file
	git commit -m "Added file ${file}"
done

git branch featureA
git branch featureB

git checkout featureA
echo "change in file1.txt content" > file1.txt
mkdir dirA
git mv file2.txt dirA
git rm file3.txt
git add file1.txt dirA/file2.txt file3.txt
git commit -m "Updated the repo"

git checkout featureB
touch file4.txt
echo "change in file1.txt content" > file1.txt
mkdir dirB
git mv file2.txt dirB
git add file1.txt dirB/file2.txt file4.txt
git commit -m "Updated the repo"

git checkout main

git merge featureA
git status
git merge featureB
