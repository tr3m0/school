#!/bin/bash

if [ $# -ne 1 ]; then
	echo "invalid parameters"
	exit
fi

fact=1
for i in $(seq 1 ${1}); do
	((fact*=i))
done

echo ${fact} > factRes.txt
