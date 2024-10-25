#!/bin/sh

cd out

# Function to process directories recursively
process_directory() {
    for item in "$1"/*; do
        if [ -d "$item" ]; then
            # If it's a directory, process it recursively
            process_directory "$item"
        elif [ -f "$item" ]; then
            case "$item" in
                *.html)
                    # If it's an HTML file, remove the .html extension
                    dir=$(dirname "$item")
                    filename=$(basename "$item" .html)
                    mv "$item" "$dir/$filename"
                    echo "Renamed $item to $dir/$filename"
                    ;;
            esac
        fi
    done
}

# Start processing from the current directory
process_directory .

echo "All html files have been renamed to remove the .html extension"

cd ..
