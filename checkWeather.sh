#!/bin/bash
# Checks the weather

SITE="http://wttr.in/"

if [ $# -eq 1 ]
then
	curl "$SITE$1"
else
	curl "{$SITE}"
fi