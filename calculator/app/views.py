from django.shortcuts import render

# Create your views here.
def calculater(request):
    return render(request,'calculator.html')