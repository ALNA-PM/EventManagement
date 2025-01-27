# tickets/forms.py

from django import forms

class TicketForm(forms.Form):
    ticket_type = forms.CharField(max_length=100, required=False, initial='General')
    price = forms.DecimalField(max_digits=10, decimal_places=2)
    number_of_tickets = forms.IntegerField(min_value=1, initial=1)
