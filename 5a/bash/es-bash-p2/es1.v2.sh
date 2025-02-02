#!/bin/bash

mkdir SommaN
cd SommaN

sum=0
for i in $(seq 1 $1); do
	((sum+=i))
done

echo ${sum} > sumRes.txt

