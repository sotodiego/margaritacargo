from django.shortcuts import render


from .models import AboutU
from .models import TrackingShip
from .models import Price



def index(request):
    info = AboutU.objects.all()
    track = TrackingShip.objects.all()
    price = Price.objects.all()
    return render(request, 'public/index.html', {'aboutus': info,'tracks': track, 'prices': price })

#def statusTracking(request):
#    track = TrackingShip.objects.all()
#    return render(request, 'landing/index.html', {'tracks': track})
    
