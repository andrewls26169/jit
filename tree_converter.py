#this is how I will convert spreadsheets to hyperbolic tree data. Also, thank goodness for python's csv module!!
import csv

infile=open("hypertree.csv")
print(csv.DictReader(infile))