from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_auth.views import LogoutView
from rest_framework.authentication import TokenAuthentication



# Create your views here.
class LogoutView(LogoutView):
    authentication_classes = [TokenAuthentication]
    pass


