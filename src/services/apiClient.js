//* ApiClient reusable 


export async function ApiClient(url, endpoint, option={}) {
    try {
        const response = await fetch(url, endpoint, {
            headers: {
                "Content-Type": "application/json",
                ...option.headers
            },
            ...option
        });
        console.log(response)

        //
        if(!response.ok){
            throw new Error("Request failed with status", response.status)
        }
        return response.json();

    } catch (error) {
        console.error(error.message)
    }

};