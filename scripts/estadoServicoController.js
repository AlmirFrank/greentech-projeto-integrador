function estadoServico() {

  var name = document.getElementByTitle('name');
  var date = document.getElementByCalendar('date')
  var description = document.getElementByDescription('description');

  if (name == "") {
      alert("Informe o Titulo do Serviço !")
      name.focus();
      return;
  }

  if (date == "") {
      alert("Informe a Data!")
      date.focus();
      return;
  }
  if (description == "" ) {
      return;
  }

  if (service ==  null ) {
     document.write(" <h3>Ainda não ha nenhuma ordem de serviço cadastrado</h3>");

  }

  else  {
      return service;
  }




}