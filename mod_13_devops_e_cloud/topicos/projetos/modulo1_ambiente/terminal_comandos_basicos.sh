#!/bin/bash
# Criando pastas e arquivos
mkdir meu_projeto
cd meu_projeto
echo "Hello World" > index.txt

# Listando arquivos
ls -l

# Movendo e copiando
cp index.txt copia.txt
mv copia.txt arquivo_renomeado.txt

# Removendo arquivos
rm arquivo_renomeado.txt
