


class SavedState {

    constructor() {
        this.save = null ;
    }

    set(saveData) {
        return this.save = saveData ;
    }

    get() {
        return this.save ;
    }
}

export const savedState = new SavedState() ;
