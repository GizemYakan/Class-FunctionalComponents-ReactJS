import React from 'react';


function Merhaba(props) {
    return (
        <h1>
            Merhaba {props.name}
        </h1>
    );
}

function Dugme(props) {
    return <button>{props.name}</button>;
}


function Dikkat(props) {
    const [metin, setMetin] = React.useState(props.deger || "" + "!");
    const unlemEkle = function () {
        setMetin(metin + "!");
    };
    return <p onClick={unlemEkle}>{metin}</p>;
}


export { Merhaba, Dugme ,Dikkat};
