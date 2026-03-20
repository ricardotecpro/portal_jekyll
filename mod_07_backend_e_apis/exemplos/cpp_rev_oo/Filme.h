//Filme.h
//herança por generalização ou herança pura, herança
//#include "Genero.h"

class Filme: public Genero {
   private:
       int id;
       string nome;
   public:
      Filme();
      Filme(int, string, int, string);

      int getId() {return this->id;}
      string getNome() {return this->nome;}
      //...

      void imprimir();
};

Filme::Filme(){
  this->id = 0;
  this->nome = "";
  this->Genero::id = 0;
  this->descricao = "";
}

Filme::Filme(int idFil, string nome, int idGen, string descricao){
  this->id = idFil;
  this->nome = nome;
  this->Genero::id = idGen;
  this->descricao = descricao;
}


void Filme::imprimir(){
   cout << "\nImprimir Filme\n";
   cout << "ID Filme: " << this->id << endl;
   cout << "Nome: " << this->nome << endl;
   cout << "ID Genero: " << this->Genero::id << endl;
   cout << "Descricao: " << this->descricao << endl;
}
