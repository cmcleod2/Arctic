from rest_framework import serializers

from api.models import Category, Product, Sale

# Serializers define the API representation.
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [ 'id', 'title' ]


# Serializers define the API representation.
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [ 'id', 'category', 'name', 'description', 'filename', 'price' ]


# Serializers define the API representation.
class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = [ 'id', 'name', 'address1', 'address2', 'city', 'state', 'zipcode', 'total', 'items', 'payment_intent' ]