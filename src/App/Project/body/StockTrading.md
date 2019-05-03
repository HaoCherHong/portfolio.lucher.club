# Introduction

The crawler crawls and parses data on the stock exchange and financial statements data on the data provider and save them into database. Then the simulator uses them to simulate stock trading and test trading strategies.
The crawler uses Node.js to parse HTML data on the sites and store the data into a MongoDB database. The simulator provides a web-based interface to set up my strategies and estimates the revenue.

The hardest part of this project is to parse the data, much of data are not machine-reading friendly, mostly HTML table. I had to analyze the data format, which contains many exceptions, and write generic Regex to parse them.

![Simulator interface](/images/image30.png)