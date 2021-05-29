import React from 'react';


class Hi extends React.Component{
  render(){
    return <h1>Merhaba Dünya</h1>;
  }
}

class Sayac extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { sayi: 1 }; //ilk değer
  }

  render() {
    // onClick = {this.arttir.bind(this)}
    return <button onClick={()=>this.arttir()}>{this.state.sayi}</button>;
  }
 ; 
  arttir(){
    this.setState({sayi : this.state.sayi + 1});
  }
}

export{
  Hi, Sayac
}