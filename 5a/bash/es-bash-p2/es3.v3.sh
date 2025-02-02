#!/bin/bash

if [ $# -ne 2 ]; then
	echo "invalid parameters"
	exit
fi

n=$1
max=$2
res=0
for i in $(seq 1 ${max}); do
	res[$((i - 1))]=$((n * i))
done

echo ${res[@]} > "TabellinaDel${n}.txt"
