# # Cassandra Container Troubleshooting Guide

When running a Cassandra container, you might encounter issues that prevent it from starting correctly. This guide will help you troubleshoot a failed Cassandra container step-by-step.
Cassandra container it step-by-step:

---

### 🔍 1. Check Container Status

First, see the current status of all containers (including stopped ones):

```bash
docker ps -a
```

Look for the Cassandra container and note the **STATUS** and **EXIT CODE**.

---

### 🧾 2. Get Container Logs

Next, check the logs to see what caused the failure:

```bash
docker logs cassandra
```

You'll often see helpful error messages like:

- JVM heap size issues
    
- Volume mount errors
    
- Unable to write to disk
    
- Port conflicts
    
- Init script failures
    

---

### 🧹 3. Remove and Re-Run (Optional)

If you want to quickly reset and re-run with corrected settings:

```bash
docker rm cassandra
```

Then re-run the container with a more appropriate volume mount:

```bash
docker run --name cassandra -p 9042:9042 -v /opt/cassandra:/var/lib/cassandra -d cassandra
```

> Cassandra stores its actual data in `/var/lib/cassandra` — mounting to `/opt/cassandra` won't persist anything useful.

---


---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)
