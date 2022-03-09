const obj = [
    { id: 1, title: 'Mavic 2 PRO', description: 'Drone con grabación 4k para exigentes', price: 1550},
    { id: 2, title: 'Mavic 2 Enterprise', description: 'Drone con iluminación y cámara térmica', price: 2000},
    { id: 3, title: 'Matrice 300 RTK', description: 'Drone para relevamientos estructurales', price: 4500}
]

const getFetch = new Promise((resolve, reject) => {
    // acciones asincrónicas o no
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(obj);
        },2000)
    } else {
        reject('400 - Not Found');
    }

})

export default getFetch;