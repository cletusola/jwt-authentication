from django.urls import path 
from .views import getRoutes, MyTokenView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    # TokenObtainPairView
)

urlpatterns = [
    path('', getRoutes),
    path('api/token/', MyTokenView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
