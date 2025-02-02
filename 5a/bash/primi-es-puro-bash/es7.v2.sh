#!/bin/bash

elems=(1 2 3 4 5 6)

echo "first index:"
read i
echo "second index:"
read j

echo "elems[${i}] + elems[${j}] = $((${elems[${i}]} + ${elems[${j}]}))"
