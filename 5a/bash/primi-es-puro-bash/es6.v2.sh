#!/bin/bash

echo "insert 6 elements:"
read -a elems

echo "${elems[@]:3:6}"
