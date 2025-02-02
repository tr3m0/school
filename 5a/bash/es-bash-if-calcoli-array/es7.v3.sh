#!/bin/bash

elems=(1 2 3 4)

if [ $# -ne 1 ];
then
	echo "invalid parameters"
	exit
fi

elems[1]=$1

echo "modified: ${elems[@]}"
