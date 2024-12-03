#!/bin/bash

read -p "insert a number: " x
read -p "insert a number: " y

if [ $x -gt $y ];
then echo "the max is ${x}"
else echo "the max is ${y}"
fi


