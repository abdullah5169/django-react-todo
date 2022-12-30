from django.db import models

class Task(models.Model):
    body = models.TextField(max_length=300)

    def __str__(self):
        return self.body[0:20]
