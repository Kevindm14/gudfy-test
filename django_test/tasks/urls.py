from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('tasks/', views.get_tasks),
    path('show_tasks/', views.tasks, name="tasks"),
    path('create_task/', views.create_task, name="create_task"),
    path('add_task/', csrf_exempt(views.add_task), name="add_task"),
    path('complete_task/<int:id>/', csrf_exempt(views.complete_task), name="complete_task"),
]