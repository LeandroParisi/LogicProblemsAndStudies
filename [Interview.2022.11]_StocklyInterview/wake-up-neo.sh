#!/bin/bash
## Matrix 0.1
## By
##      CodNeg
### letonai@gmail.com
clear
## this code was copied from a blog post, but I completely understand what it does
wakeup="I am free of the matrix!"
tam1=$(echo $wakeup | wc -c)
tam=$(echo $(($tam1 -1)))
for i in $(seq $tam)
do
        sleep 0.2
        tput cup 0 $i
        echo $wakeup | cut -c $i

done