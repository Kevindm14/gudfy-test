from django import forms
from .models import Task

class TaskForm(forms.Form):
    title = forms.CharField(
        label='Titulo',
        widget=forms.TextInput(
            attrs={
                'class': 'form-control',
                'placeholder': 'Enter title here...'
            }
        ),
        max_length=200
    )
    description = forms.CharField(
        label='Descripcion',
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
                'placeholder': 'Enter description here...'
            }
        ),
    )