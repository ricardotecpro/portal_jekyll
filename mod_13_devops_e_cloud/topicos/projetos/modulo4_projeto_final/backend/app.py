from flask import Flask, request, jsonify

app = Flask(__name__)
tarefas = []

@app.route("/tarefas", methods=["GET", "POST"])
def gerenciar_tarefas():
    if request.method == "POST":
        nova = request.json.get("tarefa")
        tarefas.append(nova)
        return jsonify({"status": "ok", "tarefa": nova}), 201
    return jsonify(tarefas)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
