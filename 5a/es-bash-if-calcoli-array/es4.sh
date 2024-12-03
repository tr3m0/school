#!/bn/bash

read -p "insert 3 numbers: " -a nums

if [ ${#nums[@]} -ne 3 ];
then
	echo "invalid parameters"
	exit
fi

sum=0
for i in ${nums[@]}
do
	((sum+=i))
done

echo "$((sum / ${#nums[@]}))"
