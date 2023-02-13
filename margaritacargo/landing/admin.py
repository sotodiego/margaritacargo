from django.contrib import admin

# Register your models here.
from .models import AboutU
from .models import Price
from .models import TrackingShip

admin.site.register(AboutU)
admin.site.register(Price)
admin.site.register(TrackingShip)
