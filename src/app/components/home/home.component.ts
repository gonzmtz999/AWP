import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import * as firebase from 'firebase/compat';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'pushfire';

  
  respuesta:any;
  readonly VAPID_PUBLIC_KEY = "BOf9d4TLBk1OtgrobpkYgUlRUNrrDSJm1kMGlOrWCK7QxSLREtLGsobrufbjb0m3x_Ku7Ft_WK4NQP71Rod44BE";

  constructor(private afMessaging: AngularFireMessaging) { 
    
  }  

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          // if(token){
            console.log('Permission granted! Save to the server!', token);
          // }else{
          //   console.error("Permiso denegado")
          // }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  // const turnOnNotification = async () => {
  //   const uid = firebase.auth().currentUser.uid;
  //   const messaging = fb.messaging();
  //   try {
  //     await messaging.requestPermission();
  //     const token = await messaging.getToken();
  //     // send to server
  //   } catch (err) {
  //     if (err.code === "messaging/token-unsubscribe-failed")
  //       this.turnOnNotification();
  //   } 
  // };


  // insWpa(){
  //   let deferredPrompt:any;
  //   let btnAdd:any;
  //   window.addEventListener('beforeinstallprompt', function(e){
  //     e.preventDefault();
  //     deferredPrompt=e;
  //   })
  //   btnAdd = document.getElementById("btnAdd");
  //   // btnAdd.addEventListener("click",(e)=>{
  //     btnAdd.style.display='none';
  //     deferredPrompt.prompt();
  //     deferredPrompt.userChoice.then((choiceResult) =>{
  //       if(choiceResult.outcome==='accepted'){
  //         console.log("Instalado");
  //         btnAdd.style.display='none';
  //       }else{
  //         console.log("no la instalo");
  //       }
  //     });
  // }

   getToken () {
    this.afMessaging.getToken.subscribe(res => console.log("Token: ",res))
  }

  // requestPermission() {
  //   this.afMessaging.requestPermission
  //     .subscribe(
  //       () => { console.log('Permission granted!'); },
  //       (error) => { console.error(error); },  
  //     );
  // }

  // subscribeToNotifications() {
  //   this.swPush.requestSubscription({
  //     serverPublicKey: this.VAPID_PUBLIC_KEY
  //   }).then(respuesta => {
  //     this.respuesta = respuesta;
  //   }).catch(err => {
  //     this.respuesta =err
  //   });
  // }

  ngOnInit(): void {
    this.getToken();
  }



}
