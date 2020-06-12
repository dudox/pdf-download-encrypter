#!/bin/bash
ARG1="$1"
pdftk main.pdf output protected.pdf owner_pw 12345 user_pw ARG1
echo ARG1