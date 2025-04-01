# DevOps 04 Containers

### Verwendete Images

| Docker Hub URL | Kurzbeschreibung
| ------- | ------- |
| https://hub.docker.com/r/dpage/pgadmin4 | Admin Interface für Postgres-SQL Datenbanken |
| https://hub.docker.com/_/postgres | Offizielle postgres image für eine Postgres SQL-Datenbank |

Für jedes Image eine Zeile in der Tabelle verwenden.

### Compose-File

[Link zu Docker Compose File in diesem Repository](./container-app/docker-compose.yaml)

## Eigenes Lernjournal

### 2 Applikation Docker manuell

Manuelles Deployment und Netzwerk mit Docker (Dokumentation des Erstellungsprozesses und der 
lauffähigen Applikation mit und ohne Netzwerk)

To-DO:

1. Erstellen und ausführen der einzelnen Container
2. Mapping eines Netzwerks.

### Docker-Compose mit 2 Applikationen

Für die Applikation habe ich PGAdmin (Postgres SQL Interface) und eine PostgresSQL Datenbank gewählt.

Folgendes ist das Docker-Compose File:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres
    container_name: postgres_db
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
      POSTGRES_DB: mydatabase
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
    depends_on:
      - postgres

volumes:
  postgres_data: {}
```
Mit dem CMD `docker compose up` habe ich das Docker Compose File ausgeführt. Dies hat mir alle definierten Images vom DockerHub gezogen. Danach konnte ich in Docker Desktop eine Orchestrierte Anwendung sehen. Über den Port `127.0.0.1:5050` (Localhost) konnte ich auf PGAdmin zugreifen. So hat das ganze ausgesehen mitsamt der Verbindung auf die DB `mydatabase`.

![Screenshot der Anwendung](./assets/container-apps/pg_admin_with_postgresql.png)


To-Do:

 ✓ Node Webapp mit Express: Eigene angepasste Version erstellen (z.B. Text), Vorgehen, Image und 
Deployment dokumentieren

 ✓ DevOpsDemo: Eigene App (mit Anpassungen) bauen, lokal deployen und in Browser öffnen, 
nachvollziehbare Dokumentati