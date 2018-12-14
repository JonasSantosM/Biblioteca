import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {

  private API_URL = '127.0.0.1:8000/Api/'

  constructor(public http: HttpClient) { }

  createAccount(email: string, senha: string, apelido: string, dataNascimento: any) {

    return new Promise((resolve, reject) => {

      var data = {

        email: email,

        senha: senha,

        apelido: apelido,

        dataNascimento: dataNascimento
      };

      this.http.post(this.API_URL + 'Login/Create', data)

        .subscribe((result: any) => {

          resolve();

        },

          (error) => {

            reject();

          });

    });
  }

  login(email: string, senha: string, apelido: string, dataNascimento: any) {

    return new Promise((resolve, reject) => {

      var data = {

        email: email,

        senha: senha,

        apelido: apelido,

        dataNascimento: dataNascimento

      };

      this.http.post(this.API_URL + 'Login/SignIn', data)

        .subscribe((result: any) => {

          resolve();

        },

          (error) => {

            reject();

          });

    });

  }

  get(id: number) {

    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'Login/Find/' + id;

      this.http.get(url)

        .subscribe((result: any) => {

          resolve();

        },

          (error) => {

            reject();

          });

    });

  }

  /** insert(user: any) {

    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'Login/';

      this.http.post(url, user)

        .subscribe((result: any) => {

          resolve(result.json());

        },

        (error) => {

          reject(error.json());

        });

    });

  }
*/

  update(user: any) {

    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'Login/Edit' + user.id;

      let data = {

        "email": user.Email,

        "apelido": user.Apelido,

        "dataNascimento": user.DataNascimento,

        "senha": user.Senha

      }

      this.http.put(url, user)

        .subscribe((result: any) => {

          resolve();

        },

          (error) => {

            reject();

          });

    });

  }

  remove(id: number) {

    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'Login/Delete' + id;

      this.http.delete(url)

        .subscribe((result: any) => {

          resolve();

        },

          (error) => {

            reject();

          });

    });

  }

}

export class Login {
  Email: string;
  Senha: string;
  Apelido: string;
  DataNascimento: any;
}