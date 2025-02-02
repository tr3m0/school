#!/bin/bash

read -p "insert a number: " n

fact=1
for i in $(seq 1 ${n}); do
	((fact*=i))
done

echo ${fact} > factRes.txt

