


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


const sampleState = () => {
    
    let save = null 

    return {
        set(data) { save = data },
        get() { return save}
    }
}
