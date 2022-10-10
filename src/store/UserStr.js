import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isRole = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    setIsRole(bool) {
        this._isRole = bool
    }

    get isAuth() {
        return this._isAuth
    }
    get isRole() {
        return this._isRole
    }
    get user() {
        return this._user
    }
}
