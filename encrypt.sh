#!/bin/bash
pdftk main.pdf output "$1".pdf owner_pw 12345 user_pw "$1"
cp "$1".pdf "The Journey of a learne".pdf
mkdir encrypted_zip_files/"$1"
echo "your password is $1" > readme.txt
zip -9 -r "The Journey of a learner".zip "The Journey of a learner".pdf readme.txt
mv "$2".zip encrypted_zip_files/$1
rm -r "$1".pdf
