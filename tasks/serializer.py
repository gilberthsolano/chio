from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'  # This includes all fields from the Task model
        # Alternatively, if you want to include specific fields, use:
        # fields = ['field1', 'field2', 'field3']
