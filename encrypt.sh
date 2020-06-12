#!/bin/bash
pdftk main.pdf output protected.pdf owner_pw 12345 user_pw "$1"
echo "your password is $1" > readme.txt
zip -r encrypted.zip protected.pdf readme.txt
mv encrypted.zip encrypted_zip_files
rm -r protected.pdf
