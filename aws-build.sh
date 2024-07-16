cd out/pages
for f in *.html
do 
    mv -- "$f" "${f%.*}"
done
echo "All html files in out/pages have been renamed to remove the .html extension"
cd ../..
