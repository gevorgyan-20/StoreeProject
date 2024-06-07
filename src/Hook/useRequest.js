const UseRequest = () => {
    const get = async(url) => {
        const data = await fetch(url)
        return data.json()
    }

    return {get}
}

export default UseRequest;