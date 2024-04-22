function insertSort (tab){
    for ( let i=1;i<tab.length;i++){
        let aux =tab[i];
        let j=i-1;
        while (j>=0 && tab[j]> aux) {
            tab[j+1] = tab [j];
        
            j-=1;
        }
        tab[j+1]=aux;
    }
    return tab;
}

console.log(insertSort([1,9,6,4,3,2]));