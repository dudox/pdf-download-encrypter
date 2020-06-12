#!/bin/bash

# encrypt
dir=$1
pdftk "$dir" output protected.pdf owner_pw 12345 user_pw