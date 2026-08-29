from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,style={'input_type':'password'},min_length=8)
    class Meta:
        model=User
        fields=['username','email','password']

    def create(self, validated_data):
        return User.objects.create_user(
            # **validated_data
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )

    # def create(self, validated_data):
    #     return super().create_user(validated_data)
