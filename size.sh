#!/bin/sh
now=`date +%Y-%m-%d.%H:%M:%S`
size=`du -sh node_modules | cut -f1`
echo $now $size >> size.txt

echo "Done. File updated, new file"
cat size.txt