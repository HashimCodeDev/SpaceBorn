from django.urls import path
from api.views import DashboardView, Admin_UsersView, TaskView, ProjectsView, LoginView, LogoutView, MeetingView, MeetingAttendanceView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from api.views import PasswordResetRequestView, PasswordResetConfirmView
from rest_framework_simplejwt.views import TokenBlacklistView

# Import drf-spectacular views
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    # Your existing URLs
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
    
    path('v1/users/', Admin_UsersView.as_view(), name='users'),
    path('v1/tasks/', TaskView.as_view(), name='tasks'),
    path('v1/projects/', ProjectsView.as_view(), name='projects'),
    
    path('logout/', LogoutView.as_view(), name='logout'),
    path('login/', LoginView.as_view(), name='login'),
    
    path('meetings/<int:pk>/', MeetingView.as_view(), name='meeting'),
    path('meeting/attendance/', MeetingAttendanceView.as_view(), name='meeting_attendance'),
    path('auth/password-reset/', PasswordResetRequestView.as_view(), name='password-reset'),
    path(
        'auth/password-reset-confirm/<uidb64>/<token>/',
        PasswordResetConfirmView.as_view(),
        name='password-reset-confirm'
    ),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
    
    # Swagger URLs
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
