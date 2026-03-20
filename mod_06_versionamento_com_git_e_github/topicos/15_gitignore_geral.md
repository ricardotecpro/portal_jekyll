# Gitignore

Arquivo `.gitignore` abrangente, organizado por seções, para todos os tipos de aplicações que você listou. Você pode copiar o conteúdo inteiro para um arquivo chamado `.gitignore` na raiz do seu repositório ou apenas usar as seções relevantes para seu projeto.

Um arquivo **`.gitignore`** especifica arquivos e pastas que o Git deve ignorar e não rastrear. Isso é útil para evitar que arquivos de compilação, dependências, arquivos de configuração local e outros artefatos gerados automaticamente sejam enviados para o repositório.

-----

### Arquivo `.gitignore` Consolidado

```gitignore
# ===================================================================
# GERAL: Sistema Operacional e Editores de Código
# ===================================================================

# Arquivos de sistema do macOS
.DS_Store
.AppleDouble
.LSOverride

# Arquivos de sistema do Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Arquivos de log e bancos de dados temporários
*.log
*.sql
*.sqlite
*.tmp

# Arquivos de IDEs e Editores
../.idea/
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.sublime-project
*.sublime-workspace

# ===================================================================
# Android (app_android)
# ===================================================================
*.apk
*.aab
*.ap_
*.dex
build/
app/build/
captures/
.gradle/
local.properties
*.jks
*.keystore

# ===================================================================
# Angular (app_angular)
# ===================================================================
/dist/
/tmp/
/out-tsc/
/node_modules/
.angular/
coverage/
# Descomente abaixo se seus arquivos de ambiente contiverem segredos
# src/environments/environment.prod.ts
# src/environments/environment.ts

# ===================================================================
# C & C++ (app_c, app_c_csfml, app_c++, app_c++sfml)
# ===================================================================
# Arquivos compilados
*.o
*.obj
*.so
*.a
*.dll
*.lib
*.dylib
*.pdb
*.gdb

# Executáveis
*.exe
*.out
*.app

# Diretórios de build
bin/
build/
obj/

# ===================================================================
# Flutter (app_flutter)
# ===================================================================
.dart_tool/
.flutter-plugins
.flutter-plugins-dependencies
.packages
build/
ios/Pods/
ios/.symlinks/
ios/Flutter/
android/.gradle/
android/local.properties
android/app/build/
*.iml

# ===================================================================
# Go (app_go, app_go_fyne, app_go_gio, etc.)
# ===================================================================
# Binários
*.exe
*.exe~
*.test
*.out

# Diretório de dependências (antigo)
# vendor/

# ===================================================================
# Java (app_java, app_java_javafx, app_java_swing)
# ===================================================================
# Arquivos compilados
*.class

# Pacotes
*.jar
*.war
*.ear

# Diretórios de build (Maven, Gradle, etc.)
target/
build/
bin/
.gradle/

# ===================================================================
# JavaScript (app_js web node)
# ===================================================================
node_modules/
dist/
build/
public/build/
.npm/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
coverage/
.env
.env.local
.env.*.local

# ===================================================================
# PHP (app_php)
# ===================================================================
vendor/
composer.phar
.env
storage/framework/
storage/logs/
bootstrap/cache/

# ===================================================================
# Python (app_python, app_python_qt, app_python_tkinter)
# ===================================================================
# Ambientes virtuais
.env
.venv
env/
venv/

# Bytecode e arquivos compilados
__pycache__/
*.pyc
*.pyo
*.pyd

# Distribuição e pacotes
build/
dist/
eggs/
*.egg-info/
*.egg
.pytest_cache/
.tox/
.coverage
htmlcov/

# Jupyter Notebook
.ipynb_checkpoints

# ===================================================================
# Rust (app_rust, app_rust_gtk)
# ===================================================================
target/
*.rlib
*.rs.bk

# ===================================================================
# Scripts (app_bash, app_powershell)
# ===================================================================
# Arquivos de log e backup
*.log
*.tmp
*.bak

# Variáveis de ambiente e segredos
*.env
secrets.*
config.local.*

```


---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)
