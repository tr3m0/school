#!/bin/bash

elems=(1 2 3 4 5)

slice=${elems[@]:0:3}

echo "slice: ${slice[@]}"
