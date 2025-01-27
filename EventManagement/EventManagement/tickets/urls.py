from django.urls import path
from . import views

urlpatterns = [
    path('', views.ticket_view, name='ticket_view'),
    path('success/', views.ticket_success, name='ticket_success'),
]