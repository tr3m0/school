#!/bin/bash

elems=(1 2 3 4)

read -p "insert a number: " x

elems[1]=$x

echo "modified: ${elems[@]}"
