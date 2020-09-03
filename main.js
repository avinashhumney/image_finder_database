class PhotoGallery {
    constructor() {
        this.Api_key = '563492ad6f917000010000018d61a61bb68c47de90a94faa362031c4';
        this.eventHandle();
    }
    eventHandle() {
        document.addEventListener('DOMContentLoaded', () => {
            this.getImg();
        });
    }
    async getImg() {
        const baseUrl = 'https://api.pexels.com/v1/curated?per_page=6';
        const response = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.Api_key
            }
        })
        const data = await response.json();
        console.log(data.photos.forEach(url=>{
            const imggrid = document.querySelector('.image-grid')
            const img = document.createElement('div');
            img.classList.add('image')
            img.innerHTML = `
            <div>
            <img src="${url.src.original}" height="400px" width="350px" download>
            </div>
            <h3>Download</h3>
            <button data-target="#mymodal" data-toggle="modal">
            <i class="fa fa-download fa-2x"></i>
            </button>
            `
            imggrid.append(img)
            console.log(url.src.original)
        }))
    }
}

const gallery = new PhotoGallery;