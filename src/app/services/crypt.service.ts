import { Injectable } from '@angular/core';
import aes from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  private masterKey: string = sessionStorage.getItem('masterKey') || '';

  public getMasterKey = () => this.masterKey;
  public setMasterKey = (masterKey: string) => {
    sessionStorage.setItem('masterKey', masterKey)
    this.masterKey = masterKey;
  };

  public encrypt = (text: string) => {
    return aes.encrypt(text, this.masterKey).toString()
  }

  public decrypt = (text: string) => {
    return aes.decrypt(text, this.masterKey).toString(enc)
  }

  constructor() { }
}
