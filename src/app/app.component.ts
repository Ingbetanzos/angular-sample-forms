import { Component, VERSION, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  form: FormGroup;
  banValidaDatos = true;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      ape: ['', [Validators.required]],
      street: ['', [Validators.required]],
      numInt: ['', [Validators.required]],
      numExt: ['', [Validators.required]],
    });
  }

onkey = (key?: any) => {
  console.log(key.target.value);
}

validaDatos = (key?: any) => {
  //console.log('valida datos');
  //console.log(this.form.value);
  const {street, numInt, numExt} = this.form.value;
  //console.log(`${street} ${numInt} ${numExt}`);
  const value = `${street.replace(' ', '')}${numInt}${numExt}`.replace(' ', '');
  //console.log(value);
  //console.log(value.length);
  this.banValidaDatos =  value.length < 30 ? true : false;
  
}

  enviarFormulario() {
    //console.log('Estado: ', this.form.valid);
    if(this.form.valid && this.banValidaDatos) {
      const {name} = this.form.value;      
      console.log(name.substring(4));
      console.log('Enviar Formulario');
    }
    
  }
}
