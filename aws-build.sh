cd out
for f in *.html
do 
    if [ "$f" != "index.html" ]; then
        mv -- "$f" "${f%.*}"
    fi
done
echo "All html files in out directory have been renamed to remove the .html extension (except index.html)"
cd ..