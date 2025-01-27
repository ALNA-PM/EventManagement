# tickets/views.py

from django.shortcuts import render, redirect
from .forms import TicketForm
from pymongo import MongoClient
from django.conf import settings

def ticket_view(request):
    if request.method == 'POST':
        form = TicketForm(request.POST)
        if form.is_valid():
            ticket_type = form.cleaned_data['ticket_type']
            price = form.cleaned_data['price']
            number_of_tickets = form.cleaned_data['number_of_tickets']

            client = MongoClient(settings.MONGO_CLIENT)
            db = client[settings.MONGO_DB]
            collection = db[settings.MONGO_COLLECTION]

            ticket_data = {
                'ticket_type': ticket_type,
                'price': float(price),
                'number_of_tickets': number_of_tickets
            }
            collection.insert_one(ticket_data)

            return redirect('ticket_success')
    else:
        form = TicketForm()

    return render(request, 'tickets/ticket_form.html', {'form': form})

def ticket_success(request):
    return render(request, 'tickets/ticket_success.html')
