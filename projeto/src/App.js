import React from "react";
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      filmes: [
        {
          id: 1,
          nome: "Carlota Joaquina, Princesa do Brazil",
          imagemUrl:
          "https://upload.wikimedia.org/wikipedia/pt/b/be/Carlota_Joaquina%2C_Princesa_do_Brazil_%281995%29_Poster.jpg",
        },
        {
          id: 2,
          nome: "Tropa de Elite",
          imagemUrl:
          "https://www.cafecomfilme.com.br/media/k2/items/cache/8967817feb845c0d0259582eb5885ecc_XL.jpg?t=20160828_195108",
        },
        {
          id: 3,
          nome: "Vidas Secas",
          imagemUrl:
          "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7f/Vidas_Secas_CN_0116A.jpg/240px-Vidas_Secas_CN_0116A.jpg",
        },
        {
          id: 4,
          nome: "Do começo ao fim" ,
          imagemUrl:
          "https://i.pinimg.com/originals/d1/5f/9d/d15f9d9d186b314767a7c5b2b4ab268b.jpg",
        },
        {
          id: 5,
          nome: "O Auto da Compadecida",
          imagemUrl:
          "https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/O_auto_da_compadecida.jpg/200px-O_auto_da_compadecida.jpg" ,
        },
        {
          id: 6,
          nome: "Bacurau",
          imagemUrl: 
          "https://javiu.files.wordpress.com/2019/09/bac.jpg?w=800",
        },
        {
          id: 7,
          nome: "O Palhaço",
          imagemUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81Bsh-UIYjL.jpg" ,
        },
        {
          id: 8,
          nome:"Flores Raras",
          imagemUrl:
          "https://upload.wikimedia.org/wikipedia/pt/a/a7/Flores_Raras_Poster.jpg",
        },
        {
          id: 9,
          nome: "Serra Pelada",
          imagemUrl:
          "https://filmspot.com.pt/images/filmes/posters/big/228148_pt.jpg" ,
        },
        {
          id: 10,
          nome:"Meu nome não é Johnny",
          imagemUrl:
          "https://br.web.img3.acsta.net/medias/nmedia/18/87/82/88/19961969.jpg",
        },
      ],
    };
  }
  render(){
    const { filmes } = this.state;
    
    return (
      <div className="container">
        <h1 class = "gradiente">CineBrasil</h1>
        <ul>
          {filmes.map((f) => (
            <li key = {f.id}>
              <h3>{f.nome}</h3>
              <img src={f.imagemUrl} alt={f.nome}/>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

