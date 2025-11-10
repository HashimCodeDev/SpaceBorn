from rest_framework import serializers
from .models import Team, User, Tasks


# 1️⃣ --- Team Serializer ---
class TeamSerializer(serializers.ModelSerializer):
    # include related users and tasks if you want nested data
    members = serializers.StringRelatedField(many=True, read_only=True)
    team_tasks = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Team
        fields = ['id', 'code', 'name', 'members', 'team_tasks']


# 2️⃣ --- User Serializer ---
class UsersSerializer(serializers.ModelSerializer):
    team = serializers.StringRelatedField(read_only=True)  # display team name instead of ID
    assigned_tasks = serializers.StringRelatedField(many=True, read_only=True)
    received_tasks = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = [
            'full_name',
            'email_id',
            'alternative_email_id',
            'age',
            'position',
            'contact_no1',
            'contact_no2',
            'linkedin',
            'github',
            'gender',
            'joined_on',
            'team',
            'assigned_tasks',
            'received_tasks',
        ]


# 3️⃣ --- Task Serializer ---
class TaskSerializer(serializers.ModelSerializer):
    assigned_by = serializers.StringRelatedField(read_only=True)
    assigned_to = serializers.StringRelatedField(read_only=True)
    assigned_team = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Tasks
        fields = [
            'id',
            'name',
            'status',
            'deadline',
            'assigned_by',
            'assigned_to',
            'assigned_team',
        ]
