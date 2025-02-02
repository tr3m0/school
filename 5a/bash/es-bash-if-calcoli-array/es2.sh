#!/bin/bash

x=$1
y=$2

if [[ ( $x == "" ) || ( $y == "" ) || ! ( $3 == "" ) ]];
then
	echo "Error: invalid parameters"
	exit
fi

echo "${x} + ${y} = $((x + y))"
