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

# Create a simple index.html that redirects to /en or /es
cat > index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <script>
        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.toLowerCase().startsWith('es')) {
            window.location.replace('/es');
        } else {
            window.location.replace('/en');
        }
    </script>
</head>
<body>
    <p>Redirecting to the appropriate language version...</p>
</body>
</html>
EOF

echo "Created root index.html with language redirect"
echo "All html files have been renamed to remove the .html extension"

cd ..
