#!/bin/bash

mkdir SommaN
cd SommaN

if [ $# -ne 1 ]; then
	echo "invalid parameter"
	exit
fi

sum=0
for i in $(seq 1 ${1}); do
	((sum+=i))
done

echo ${sum} > sumRes.txt
cat sumRes.txt
