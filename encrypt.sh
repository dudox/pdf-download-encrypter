#!/bin/bash
pdftk main.pdf output "$1".pdf owner_pw 12345 user_pw "$1"
cp "$1".pdf The_Journey_of_a_learner.pdf
mkdir -m 777 encrypted_zip_files/"$1"
echo "your password is $1" > readme.txt
zip -9 -r The_Journey_of_a_learner.zip The_Journey_of_a_learner.pdf readme.txt
mv The_Journey_of_a_learner.zip encrypted_zip_files/"$1"
rm -r "$1".pdf
