#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

ARG NODE_IMAGE=node:10.16.0

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-nanoserver-1903 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-nanoserver-1903 AS build
WORKDIR /src
COPY ["RemindersApp/RemindersApp.csproj", "RemindersApp/"]
RUN dotnet restore "RemindersApp/RemindersApp.csproj"
COPY . .
WORKDIR "/src/RemindersApp"
RUN dotnet build "RemindersApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "RemindersApp.csproj" -c Release -o /app/publish

FROM ${NODE_IMAGE} as node-build
WORKDIR /src
COPY RemindersApp/ClientApp .
RUN npm install
RUN npm run dev 

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=node-build /src/dist ./ClientApp/dist
ENTRYPOINT ["dotnet", "RemindersApp.dll"]