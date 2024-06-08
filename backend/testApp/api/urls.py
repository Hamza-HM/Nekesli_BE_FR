from django.urls import path
from .views import ExampleApiView


urlpatterns = [
    path('api/', ExampleApiView.as_view(), name='hello-world ')
]