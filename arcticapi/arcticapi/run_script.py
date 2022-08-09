#!/usr/bin/env python3

# initialize django
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'arcticapi.settings'
import django
django.setup()

# regular imports
from api.models import Category, Product
import json

# main script
def main():    
    # Have to create the Categories first then give each objects category an actual category object 
    with open('products.json') as json_file:
        data = json.load(json_file)
    products = data['products']
    cats = []

    for prod in products:
        if prod['category'] not in cats:
            cats.append(prod['category'])

    for cat in cats:
        dbcat = Category()
        dbcat.title = cat
        dbcat.save()

    for prod in products:
        dbprod = Product()
        dbprod.category = Category.objects.get(title=prod['category'])
        dbprod.name = prod['name']
        dbprod.description = prod['description']
        dbprod.filename = prod['filename']
        dbprod.price = prod['price']
        dbprod.save()

    for cat in Category.objects.all():
        print(cat.id, cat.title)

    for prod in Product.objects.all():
        print(prod.id, prod.name, prod.category)


# bootstrap
if __name__ == '__main__':
    main()
