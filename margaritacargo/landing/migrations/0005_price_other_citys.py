# Generated by Django 3.2.8 on 2023-01-23 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0004_auto_20230111_2048'),
    ]

    operations = [
        migrations.AddField(
            model_name='price',
            name='other_citys',
            field=models.CharField(choices=[('0', 'No'), ('1', 'Si')], default=1, max_length=1),
            preserve_default=False,
        ),
    ]