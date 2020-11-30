#!/usr/bin/env python3
""" Testing expiring web cache and tracker """

from web import get_page

URL = "http://slowwly.robertomurray.co.uk/delay/5000/url/https://web.ics.purdue.edu/~gchopra/class/public/pages/webdesign/05_simple.html"

print(get_page(URL))

print("=================================================")
print("=================================================")
print("=================================================")

print(get_page(URL))
