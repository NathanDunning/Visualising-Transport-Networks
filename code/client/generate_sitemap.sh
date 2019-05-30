#!/bin/bash
object='{}'

find 'public/data' -type f -name '*.csv' | while read -r filename;
do
    filename=$(echo "$filename" | sed 's/public\/data\///' | sed 's/ /\//')
    city=$(echo "$filename" | cut -d'/' -f1)
    medium=$(echo "$filename" | cut -d'/' -f2)
    direction=$(echo "$filename" | cut -d'/' -f3)
    date=$(echo "$filename" | cut -d'/' -f4)
    time=$(echo "$filename" | cut -d'/' -f5| head -c-5)
    object=$(echo $object | jq -c ".$city.$medium.$direction[\"$date\"] |= . + [\"$time\"]")
    echo $object > public/available.json
done
