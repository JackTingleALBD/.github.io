import requests
import json
import csv

x = requests.get('https://api.binance.com/api/v3/exchangeInfo')
print(x.json())

def jprint(x):

    text = json.dumps(x, sort_keys=True, indent=4)
    print(text)
jprint(x.json())

with open ("result.json", "w") as outfile:
    json.dump(x.json(), outfile, indent=1)

with open("result.json", "r") as f:
    data = json.load(f)
    rateLimits = data["symbols"]

with open("results.csv", "w") as f:
    fieldnames = rateLimits[0].keys()
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    count = 0
    writer.writeheader()
    for name in rateLimits:
        writer.writerow(name)