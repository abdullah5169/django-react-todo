from django.urls import path
from . import views

urlpatterns = [
    path('tasks', views.getTasks, name = "getTasks"),
    path('tasks/create', views.createTask, name = "createTask"),
    path('tasks/<str:pk>', views.getTask, name = "getTask"),
    path('tasks/<str:pk>/update', views.updateTask, name = "updateTask"),
    path('tasks/<str:pk>/delete', views.deleteTask, name = "deleteTask"),
]
