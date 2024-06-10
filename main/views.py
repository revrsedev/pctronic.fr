from django.shortcuts import render

def index(request):
    return render(request, 'main/home.html')
    # Add more views as needed
