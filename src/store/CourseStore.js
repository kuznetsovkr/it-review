import {makeAutoObservable} from "mobx";

export default class CourseStore {

    constructor() {
        this._sections = [

        ]
        this._categories = [

        ]

        makeAutoObservable(this)
    }
    get sections() {
        return this._sections;
    }

    setSections(sections) {
        this._sections = sections;
    }

    get categories() {
        return this._categories;
    }

    setCategories(value) {
        this._categories = value;
    }


}