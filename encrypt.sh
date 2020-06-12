#!/bin/bash
pdftk "file/main.pdf" output "/var/www/book/file/protected.pdf" owner_pw 12345 user_pw