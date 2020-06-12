#!/bin/bash
DIR_PDF= "cd file && main.pdf"
DIR_PROTECTED = "cd file && protected.pdf"
pdftk DIR_PDF output DIR_PROTECTED  owner_pw 12345 user_pw