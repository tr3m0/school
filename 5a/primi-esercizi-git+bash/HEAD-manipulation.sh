#!/bin/bash

git init $HOME/Desktop/HeadManipulationRepo
cd $HOME/Desktop/HeadManipulationRepo

for i in $(A B C); do
	touch "file$i.txt"
	echo "File $i" > $i
	git add "file$i.txt"
	git commit -m "Added file $i"
done

git branch devTemp
git checkout devTemp

echo "mods" > fileB.txt

git log --oneline --graph --all

git checkout master
git merge master

git log --oneline --graph --all
