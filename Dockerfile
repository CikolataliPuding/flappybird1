# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY FlappyBird.Client/ FlappyBird.Client/
COPY FlappyBird.Server/ FlappyBird.Server/
COPY FlappyBird.sln .

RUN dotnet restore
RUN dotnet publish FlappyBird.Server/FlappyBird.Server.csproj -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://0.0.0.0:10000
EXPOSE 10000
ENTRYPOINT ["dotnet", "FlappyBird.Server.dll"]

