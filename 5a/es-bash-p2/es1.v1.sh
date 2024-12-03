#!/bin/bash

mkdir SommaN
cd SommaN

read -p "insert a number: " n

sum=0
for i in $(seq 1 ${n}); do
	((sum+=i))
done

echo ${sum} > sumRes.txt
