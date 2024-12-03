#!/bin/bash

elems=(1 2 3 4)

echo "insert index in range [0, 4):"
read i

echo "${elems[${i}]}"
