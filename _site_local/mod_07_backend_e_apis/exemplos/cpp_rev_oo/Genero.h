//Genero.h
class Genero {
  protected:
    int id;
    string descricao;

  public:
    Genero(): id(0), descricao("") {}
    Genero(int id, string descricao): id(id), descricao(descricao) {}

    //gets - métodos de acesso
    int getId () {return this->id;}
    string getDescricao () {return this->descricao; }

    //sets - metodos de modificação
    void setId(int id) {this->id = id; }
    void setDescricao(string descricao) {this->descricao = descricao;}

    void imprimir();
};

void Genero::imprimir(){
   cout << "\nImprimir Genero\n";
   cout << "ID: " << this->id << endl;
   cout << "Descricao: " << this->descricao << endl;
}
