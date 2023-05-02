from pyexpat import features
from django.db import models
from django.forms import Textarea, widgets

# Create your models here.
class AboutU(models.Model):
    about_us = models.TextField()

    def __str__(self):
        return self.about_us

class Price(models.Model):
    OTHER_CITYS =(
            ('0', 'No'),
            ('1', 'Si'),
    )
    destination = models.CharField(max_length=50)
    price_ship = models.CharField(max_length=50)
    price_aerial = models.CharField(max_length=50)
    other_citys = models.CharField(max_length=1,choices=OTHER_CITYS)
    def __str__(self):
        return self.destination

class TrackingShip(models.Model):
    DESTINATIONS_OUTPUT = (
        ('Miami-Guamache', 'Miami-Guamache'),
        ('Miami-La Guaira', 'Miami-La Guaira'),
        ('Miami-Caracas', 'Miami-Caracas'),
        
    )
    STATUS_OUTPUT = (
        ('En tránsito', 'En tránsito'),
        ('Retrasado', 'Retrasado'),
        ('Recibiendo', 'Recibiendo'),
        ('En Aduana', 'En Aduana'),
        ('Próxima salida', 'Próxima salida'),
    )
    destination = models.CharField(max_length=15,choices=DESTINATIONS_OUTPUT)    
    status = models.CharField(max_length=15,choices=STATUS_OUTPUT)
    estimated_arrived= models.DateField()
    deadline_container= models.DateField()
    departure_date = models.DateField()

    
    def __str__(self):
        return self.destination
