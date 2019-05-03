# Introduction

The program crawls and parses data on the stock exchange and financial statements data on the internet to database. to simulate stock trading and test trading strategies.
The program crawls and parses HTML data on the sites using node.js and store the data into a MongoDB database. With the data, I was able to simulate strategies setting on a React site I developed and estimate the revenue.
The hardest part of this program is to parse the data, much of data are not machine-reading friendly. I have to analyze the data format (which contains many exceptions) and write generic Regex for them.

![](/images/image30.png)