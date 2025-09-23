


export const SaveState = () => {
    let save = null ;

        return {
            set(savedata) { 
                save = savedate;
            },
            get() { 
                return save;
            } 
        }
    
}