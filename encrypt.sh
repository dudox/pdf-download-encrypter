#!/bin/bash
pdftk main.pdf output "$1".pdf owner_pw 12345 user_pw "$1"
echo "your password is $1" > readme.txt
zip -r "$2".zip protected.pdf readme.txt
mv "$2".zip encrypted_zip_files
rm -r "$1".pdf
