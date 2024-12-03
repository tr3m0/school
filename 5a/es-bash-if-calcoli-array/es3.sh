#!/bin/bash

echo "insert a number:"
read n

if [ $((n % 2)) -eq 0 ];
then echo "even"
else echo "odd"
fi
