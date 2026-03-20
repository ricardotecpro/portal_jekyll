//Emprestimo.h
class Emprestimo {
    private:
      int id;
      Data dataEmp;
      Data dataDev;
      string cliente;
      Filme filme;

    public:
        Emprestimo();
        Emprestimo(int, Data, Data, string, Filme);
        void imprimir();

};

Emprestimo::Emprestimo(){
   this->id = 0;
   this->dataEmp = Data();
   this->dataDev = Data();
   this->cliente = "";
   this->filme = Filme();
}

Emprestimo::Emprestimo(int id, Data dataEmp, Data dataDev, string cliente, Filme filme ){
   this->id = id;
   this->dataEmp = dataEmp;
   this->dataDev = dataDev;
   this->cliente = cliente;
   this->filme = filme;
}

void Emprestimo::imprimir(){
   cout << "\nImprimir Emprestimo\n";

   cout << "ID: Emprestimo: " << this->id << endl;
   cout << "Data Emprestimo: " << this->dataEmp.getDia() << "/"
                               << this->dataEmp.getMes() << "/"
                               << this->dataEmp.getAno() << endl;

   cout << "Data Emprestimo: " << this->dataDev.getDia() << "/"
                               << this->dataDev.getMes() << "/"
                               << this->dataDev.getAno() << endl;
   cout << "Cliente: " << this->cliente << endl;
   cout << "Nome Filme: " << this->filme.getNome() << endl;
   //imprimir todos os atributos de filme.
   filme.imprimir();
}



