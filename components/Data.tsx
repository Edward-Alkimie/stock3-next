
export async function fetchStockRatio(){
    const ratioFinn = "http://localhost:3000/api/chartInfo/read"
    try {
        fetch(ratioFinn)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
    } catch(error) {
        console.error("There has been problem with the fetch operation:", error)
    }
}