#!/bin/bash

elems=(1 2 3 4 5)

echo "${elems[@]}"

echo "insert number:"
read n
elems[2]=${n}
echo "${elems[@]}"
