# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and projects
COPY FlappyMinimal.sln .
COPY FlappyMinimal.Client/ FlappyMinimal.Client/
COPY FlappyMinimal.Server/ FlappyMinimal.Server/
COPY FlappyMinimal.Shared/ FlappyMinimal.Shared/

# Restore and publish
RUN dotnet restore
RUN dotnet publish FlappyMinimal.Server/FlappyMinimal.Server.csproj -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

# Bind to container port (Render will map its own PORT)
ENV ASPNETCORE_URLS=http://0.0.0.0:10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "FlappyMinimal.Server.dll"]
 