from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TaskSerializer
from .models import Task


@api_view(['GET'])
def getTasks(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getTask(request, pk):
    task = Task.objects.get(id = pk)
    serializer = TaskSerializer(task, many = False)
    return Response(serializer.data)
        

@api_view(['POST'])
def createTask(request):
    data = request.data
    task = Task.objects.create(
        body=data['body'],
    )
    serializer = TaskSerializer(task, many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateTask(request, pk):
    data = request.data
    task = Task.objects.get(id = pk)
    serializer = TaskSerializer(instance=task, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteTask(request, pk):
    task = Task.objects.get(id = pk)
    task.delete()
    return Response("Task deleted")
