import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable()
export class HelperService {
  private _user$ = new BehaviorSubject<User[]>([]);
  private _admin$ = new BehaviorSubject<Admin[]>([]);

  public get users() {
    return this._user$.value;
  }

  public get users$() {
    return this._user$.asObservable();
  }

  public get admins() {
    return this._admin$.value;
  }

  public get admins$() {
    return this._admin$.asObservable();
  }

  public getUserList(): Observable<User[]> {
    return of(users).pipe(
      tap((users) => {
        this.setUsers(users);
      })
    );
  }

  public getAdminList(): Observable<Admin[]> {
    this.setAdmins(admins);
    return of(admins);
  }

  public setUser(value: User) {
    const tmp = [...this.users, value];
    this._user$.next(tmp);
  }

  public setUsers(value: User[]) {
    this._user$.next(value);
  }

  public setAdmin(value: Admin) {
    const tmp = [...this.admins, value];
    this._admin$.next(tmp);
  }

  public setAdmins(value: Admin[]) {
    this._admin$.next(value);
  }
}

export interface User {
  name: string;
  age: number;
  role: 'user';
}

export interface Admin {
  name: string;
  age: number;
  role: 'admin';
}

export const users: User[] = [
  { name: 'Minh', age: 23, role: 'user' },
  { name: 'Truc', age: 22, role: 'user' },
  { name: 'Huy', age: 22, role: 'user' },
];

export const admins: Admin[] = [
  { name: 'Qui', age: 23, role: 'admin' },
  { name: 'Khoa', age: 22, role: 'admin' },
  { name: 'Danh', age: 22, role: 'admin' },
];
