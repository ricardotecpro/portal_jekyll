tarefas = []

while True:
    tarefa = input("Digite uma tarefa (ou 'sair' para encerrar): ")
    if tarefa.lower() == "sair":
        break
    tarefas.append(tarefa)

print("\nSuas tarefas:")
for i, t in enumerate(tarefas, start=1):
    print(f"{i}. {t}")
