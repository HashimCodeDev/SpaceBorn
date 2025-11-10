from django.db import models

class Team(models.Model):
    code = models.CharField(max_length=5, null=False, blank=False, unique=True)
    name = models.CharField(max_length=100, null=False, blank=False, unique=True)

    def __str__(self):
        return self.name


class User(models.Model):
    full_name = models.CharField(max_length=255, null=False, blank=False)
    email_id = models.EmailField(unique=True, primary_key=True)
    alternative_email_id = models.EmailField(unique=True, null=False, blank=False)
    age = models.PositiveIntegerField(null=False, blank=False)
    position = models.CharField(max_length=50, null=True, blank=True)
    contact_no1 = models.CharField(max_length=15, null=False, blank=False)
    contact_no2 = models.CharField(max_length=15, null=True, blank=True)
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    gender = models.CharField(
        max_length=10,
        choices=[
            ('Male', 'Male'),
            ('Female', 'Female'),
            ('Other', 'Other'),
        ],
        null=False,
        blank=False
    )
    joined_on = models.DateField()

    team = models.ForeignKey(
        Team,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='members'
    )

    def __str__(self):
        return self.full_name


class Tasks(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    status = models.CharField(
        max_length=10,
        choices=[
            ('Active', 'Active'),
            ('Completed', 'Completed'),
            ('Cancelled', 'Cancelled'),
        ],
        null=False,
        blank=False
    )
    deadline = models.DateField(null=False, blank=False)

    # Who assigned this task
    assigned_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='assigned_tasks'
    )

    # To whom the task is assigned (optional)
    assigned_to = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name='received_tasks',
        null=True,
        blank=True
    )

    # Optional: which team the task is for
    assigned_team = models.ForeignKey(
        Team,
        on_delete=models.SET_NULL,
        related_name='team_tasks',
        null=True,
        blank=True
    )

    def __str__(self):
        return f"{self.name} ({self.status})"
