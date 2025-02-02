 #!/bin/bash

read -p "insert a number: " n

res=0
for i in $(seq 1 10); do
	res[$((i - 1))]=$((n * i))
done

echo ${res[@]} > "TabellinaDel${n}.txt"

cat "TabellinaDel${n}.txt"
