// expression function (arrow)
const membuatBusObj = (sopir, jurusan, penumpang, kas, totalKas) => {
    const bus  = {
    sopir: sopir,
    jurusan: jurusan,
    penumpang: penumpang,
    kas: kas,
    totalKas: totalKas,
    } 
    return bus;
};

// Instance 1
let Bus1 = membuatBusObj('Noto', ['Banjar', 'Majenang'], [], [], 0);
let Bus2 = membuatBusObj('Nata', ['Sidareja', 'Cilacap'], [], [], 0);
let BusCepat = membuatBusObj('Nita', ['Ciamis', 'Purwokerto'], [], [], 0);

// function untuk menangani penumpang naik
const penumpangNaik = (namaPenumpang, penumpang, uang, kas, bus) => {
    if(penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        kas.push(uang);
        bus.totalKas += uang;
        return bus;
    } else {
        for (let x=0; x < penumpang.length; x++) {
            for (let i=0; i< kas.length; i++) {
                if (namaPenumpang == penumpang[x]) {
                    alert(`${namaPenumpang} sudah ada didalam.`);
                    return false;
                } else if(penumpang[x] == null) {
                    penumpang.splice(x, 1, namaPenumpang);
                    kas.push(uang);
                    bus.totalKas += kas[i];
                    return bus;
                } else if (x == penumpang.length-1 && x < 19) {
                    penumpang.push(namaPenumpang);
                    kas.push(uang);
                    bus.totalKas += kas[i];
                    return bus;
                } else if (x == penumpang.length-1 && x >= 19) {
                    alert('Bus sudah penuh. Silahkan menunggu Bus berikutnya.');
                    return false; 
                } 
            }
        }
    };
};

// function untuk menangani penumpang turun
const penumpangTurun = (namaPenumpang, penumpang) => {
        if(penumpang.length === 0) {
            alert('Di dalam tidak ada penumpang!');
            return false; 
        }                 
            for(let x=0; x<penumpang.length; x++) {
                if(penumpang[x] == namaPenumpang) {
                    penumpang[x] = null;
                    return penumpang;
                } 
            }
        };
