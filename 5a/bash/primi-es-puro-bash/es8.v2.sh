#!/bin/bash

s=$1

echo "number of chars to read:"
read n

echo "${s:0:${n}}"
