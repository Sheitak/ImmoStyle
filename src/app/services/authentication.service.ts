/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor() { }

  // signUpUser(email: string, password: string) {
  //   return new Promise (
  //     (resolve, reject) => {
  //       firebase.auth().createUserWithEmailAndPassword(email, password).then(
  //         () => {
  //           console.log('Connecté');
  //         }
  //       ).catch(
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //     }
  //   );
  // }

  signInUser(email: string, password: string) {
    return new Promise (
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (data) => {
            resolve(data);
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
