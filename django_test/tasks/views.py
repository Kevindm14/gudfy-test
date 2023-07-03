from django.shortcuts import render
from django.http import HttpResponse
from . models import Task
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.shortcuts import redirect
from .forms import TaskForm
import json

# Create your views here.
def get_tasks(request):
    tasks = Task.objects.all()
    return JsonResponse({'tasks': list(tasks.values())})

def tasks(request):
    tasks = Task.objects.all()
    return render(request, 'tasks/tasks.html', {
        'tasks': tasks
    })

def create_task(request):
    if request.method == 'GET':
        return render(request, 'tasks/create_task.html', {
            'form': TaskForm()
        })
    else:
        title = request.POST['title']
        description = request.POST['description']

        task = Task(
            title=title,
            description=description,
        )

        task.save()

        return redirect('tasks')

def complete_task(request, id):
    task = Task.objects.get(id=id)

    print(task)

    task.completed = True

    task.save()

    return redirect('tasks')

def add_task(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        task = Task(
            title=data['title'],
            description=data['description'],
        )

        task.save()

    return JsonResponse({'task': model_to_dict(task)})