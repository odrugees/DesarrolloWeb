function valida_envia(){
   	//valido el nombre
   	if (document.fomularioRegistro.nombre.value.length==0){
      		alert("Tiene que escribir su Nombre")
      		document.fomularioRegistro.nombre.focus()
      		return 0;
   	}
    if (document.fomularioRegistro.correo.value.length==0){
          alert("Tiene que escribir su Correo electrónico")
          document.fomularioRegistro.correo.focus()
          return 0;
    }
    if (document.fomularioRegistro.numeroDocumento.value.length<5){
          alert("El documento debe contener minimo 5 digitos")
          document.fomularioRegistro.numeroDocumento.focus()
          return 0;
    }
    if (document.fomularioRegistro.numeroDocumento.value.length>20){
          alert("El documento debe contener maximo 6 digitos")
          document.fomularioRegistro.numeroDocumento.focus()
          return 0;
    }
    if (document.fomularioRegistro.edad.value >100){
          alert("El rango de edad es entre 1 y 100 años")
          document.fomularioRegistro.edad.focus()
          return 0;
    }
    alert("Muchas gracias por enviar el formulario");
   	document.fomularioRegistro.submit();
  }
