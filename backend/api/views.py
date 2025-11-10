from django.shortcuts import render
from .models import User
from rest_framework import generics
from api.serializers import UsersSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


# @get_view([GET])
class UsersView(generics.ListAPIView):
    users=User.objects.all()
    serializer_class = UsersSerializer



