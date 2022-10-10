import {makeAutoObservable} from "mobx";

export default class AcademicsStore {

    constructor() {

        this._category = [

        ]
        this._academic =[

        ]
        this._clas = [

    ]
        this._selectedCategory = {}

        makeAutoObservable(this)
    }
    setSelectedCategory(category) {
        this._selectedCategory= category
    }
    get selectedCategory() {
        return this._selectedCategory
    }

    get category() {
        return this._category;
    }

    setCategory(value) {
        this._category = value;
    }


    get academic() {
        return this._academic;
    }

    setAcademic(value) {
        this._academic = value;
    }

    get clas() {
        return this._clas;
    }

    setClas(value) {
        this._clas = value;
    }
}
