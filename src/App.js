import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [imagemUrlFilme, setImagemUrlFilme] = useState("");
  const [sinopseFilme, setSinopseFilme] = useState("");
  const [trailerFilme, setTrailerFilme] = useState("");
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      nome: "Carlota Joaquina, Princesa do Brazil",
      imagemUrl:
        "https://upload.wikimedia.org/wikipedia/pt/b/be/Carlota_Joaquina%2C_Princesa_do_Brazil_%281995%29_Poster.jpg",
      sinopse:
        "Um painel da vida de Carlota Joaquina (Marieta Severo), a infanta espanhola que conheceu o príncipe de Portugal (Marco Nanini) com apenas dez anos e se decepcionou com o futuro marido. Sempre mostrou disposição para seus amantes e pelo poder e se sentiu tremendamente contrariada quando a corte portuguesa veio para o Brasil, tendo uma grande sensação de alívio quando foi embora.",
      trailer:"https://www.youtube.com/embed/NklfDh1SW5w"
    },
    {
      id: 2,
      nome: "Tropa de Elite",
      imagemUrl:
        "https://www.cafecomfilme.com.br/media/k2/items/cache/8967817feb845c0d0259582eb5885ecc_XL.jpg?t=20160828_195108",
      sinopse:
        "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
      trailer:"https://www.youtube.com/embed/uZBiNJQxtGw"
    },
    {
      id: 3,
      nome: "Grande Sertão: Veredas",
      imagemUrl:
        "https://br.web.img3.acsta.net/c_310_420/pictures/15/01/16/18/28/582854.jpg",
      sinopse:
        "A série, baseada no clássico homônimo de Guimarães Rosa, narra a história de Riobaldo (Tony Ramos), que é um grande conhecedor do sertão de Minas Gerais, contanto das lutas heroicas sobre vingança, amor e mortes. Ele e Reinaldo (Bruna Lombardi) possuem um forte laço de amizade, que chega a perturbar a mente de Riobaldo, mas que, ainda assim, cultiva a relação com o amigo. O que ele não imagina é que Reinaldo tem um grande segredo que poderia mudar suas histórias.",
      trailer:"https://www.youtube.com/embed/tGprjIePCtg"
    },
    {
      id: 4,
      nome: "Do começo ao fim",
      imagemUrl:
        "https://i.pinimg.com/originals/d1/5f/9d/d15f9d9d186b314767a7c5b2b4ab268b.jpg",
      sinopse: "Julieta (Julia Lemmertz) tem dois filhos com uma diferença de seis anos de idade, Francisco (Lucas Cotrim) e Thomás (Gabriel Kaufmann), e com maridos diferentes: Pedro (Jean-Pierre Noher) e Alexandre (Fabio Assunção). Os dois irmãos se tornam grandes amigos desde pequenos e, quando adultos (Rafael Cardoso e João Gabriel Vasconcellos), transformam esta amizade em algo mais profundo e polêmico.",
      trailer:"https://www.youtube.com/embed/OuX-_k9Zc3U"
    },
    {
      id: 5,
      nome: "O Auto da Compadecida",
      imagemUrl:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/O_auto_da_compadecida.jpg/200px-O_auto_da_compadecida.jpg",
      sinopse:"As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.",
      trailer:"https://www.youtube.com/embed/XPuMu_ENzlg"
    },
    {
      id: 6,
      nome: "Bacurau",
      imagemUrl: "https://javiu.files.wordpress.com/2019/09/bac.jpg?w=800",
      sinopse:"Pouco após a morte de dona Carmelita, aos 94 anos, os moradores de um pequeno povoado localizado no sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade pela primeira vez. Quando carros se tornam vítimas de tiros e cadáveres começam a aparecer, Teresa (Bárbara Colen), Domingas (Sônia Braga), Acácio (Thomas Aquino), Plínio (Wilson Rabelo), Lunga (Silvero Pereira) e outros habitantes chegam à conclusão de que estão sendo atacados. Falta identificar o inimigo e criar coletivamente um meio de defesa.",
      trailer:"https://www.youtube.com/embed/qlheaoLnewE"
    },
    {
      id: 7,
      nome: "O Palhaço",
      imagemUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81Bsh-UIYjL.jpg",
      sinopse:"Benjamim (Selton Mello) trabalha no Circo Esperança junto com seu pai Valdemar (Paulo José). Juntos, eles formam a dupla de palhaços Pangaré & Puro Sangue e fazem a alegria da plateia. Mas a vida anda sem graça para Benjamin, que passa por uma crise existencial e assim, volta e meia, pensa em abandonar Lola (Giselle Mota), a mulher que cospe fogo, os irmãos Lorotta (Álamo Facó e Hossen Minussi), Dona Zaira (Teuda Bara) e o resto dos amigos da trupe. Seu pai e amigos lamentam o que está acontecendo com o companheiro, mas entendem que ele precisa encontrar seu caminho por conta própria.",
      trailer:"https://www.youtube.com/embed/H5qReKA8sD0"
    },
    {
      id: 8,
      nome: "Flores Raras",
      imagemUrl:
        "https://upload.wikimedia.org/wikipedia/pt/a/a7/Flores_Raras_Poster.jpg",
      sinopse:"1951, Nova York. Elizabeth Bishop (Miranda Otto) é uma poetisa insegura e tímida, que apenas se sente à vontade ao narrar seus versos para o amigo Robert Lowell (Treat Williams). Em busca de algo que a motive, ela resolve partir para o Rio de Janeiro e passar uns dias na casa de uma colega de faculdade, Mary (Tracy Middendorf), que vive com a arquiteta brasileira Lota de Macedo Soares (Glória Pires). A princípio Elizabeth e Lota não se dão bem, mas logo se apaixonam uma pela outra. É o início de um romance acompanhado bem de perto por Mary, já que ela aceita a proposta de Lota para que adotem uma filha.",
      trailer:"https://www.youtube.com/embed/qJ1dLdd_uxQ"
    },
    {
      id: 9,
      nome: "Serra Pelada",
      imagemUrl:
        "https://filmspot.com.pt/images/filmes/posters/big/228148_pt.jpg",
      sinopse:"1980. Juliano (Juliano Cazarré) e Joaquim (Júlio Andrade) são grandes amigos que ficam empolgados ao tomar conhecimento de Serra Pelada, o maior garimpo a céu aberto do mundo, localizado no estado do Pará. A dupla resolve deixar São Paulo e partir para o local, sonhando com a riqueza. Só que, pouco após chegarem, tudo muda na vida deles: Juliano se torna um gângster, enquanto que Joaquim deixa para trás os valores que sempre prezou.",
      trailer:"https://www.youtube.com/embed/q2y_qUEsKtY"
    },
    {
      id: 10,
      nome: "Meu nome não é Johnny",
      imagemUrl:
        "https://br.web.img3.acsta.net/medias/nmedia/18/87/82/88/19961969.jpg",
      sinopse:"Meu Nome Não é Johnny acompanha João Guilherme Estrella (Selton Mello) que nasceu em uma família de classe média do Rio de Janeiro. Filho de um diretor do extinto Banco Nacional, ele cresceu no Jardim Botânico e frequentou os melhores colégios, tendo amigos entre as famílias mais influentes da cidade. Carismático e popular, João viveu intensamente os anos 80 e 90. Neste período ele conheceu o universo das drogas, mesmo sem jamais pisar numa favela. Logo tornou-se o maior vendedor de drogas do Rio de Janeiro, sendo preso em 1995. A partir de então passou a frenquentar o cotidiano do sistema carcerário brasileiro.",
      trailer:"https://www.youtube.com/embed/hitjyeros2s"
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFilmes([
      ...filmes,
      {
        nome: nomeFilme,
        imagemUrl: imagemUrlFilme,
        sinopse: sinopseFilme,
        trailer: trailerFilme,
      },
    ]);
    setNomeFilme("");
    setImagemUrlFilme("");
    setSinopseFilme("");
    setTrailerFilme("");
  };

  const deletar = (index) => {
    setFilmes(filmes.filter((f, i) => i !== index));
  };

  return (
    <div class="container-fluid">
      <main className="main">
        <h1 class="gradiente">C i n e B r a s i l</h1>
      </main>
    <div/> 
       
        <nav>
          
          <form on Submit={onSubmit}>
          <h4>Cadastre um novo filme</h4>
            <input
              placeholder="Digite o nome do filme"
              value={nomeFilme}
              onChange={(e) => {
                setNomeFilme(e.target.value);
              }}
            />
            <br />
            <input
              placeholder="Cole a URL da imagem"
              value={imagemUrlFilme}
              onChange={(e) => {
                setImagemUrlFilme(e.target.value);
              }}
            />
            <br/>
            <input placeholder="Insira a descrição do filme"
              value={sinopseFilme}
              onChange={(e) =>{
                setSinopseFilme(e.target.value);
              }}
              />
              <br/>
            <input placeholder="Insira a URL do trailer"
              value={trailerFilme}
              onChange={(e) =>{
                setTrailerFilme(e.target.value);
              }}
              />
            <br/>
            <button type="submit">Cadastrar</button>
          </form>
        </nav>

        
        <h3>Filmes</h3>
        <ul>
          {filmes.map((f, index) => (
            <div class="filmes" key={index}>
              <div>
              <h4>{f.nome}</h4>
              <br/>
              <img src={f.imagemUrl} alt={f.nome} />
              </div>
              <div class="sinopse">
              <p>{f.sinopse}</p>
              <br/>
              <iframe width="580" height="360" src={f.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <button onClick={() => deletar(index)}>Deletar</button>
              </div>
            </div>
          ))}
        </ul>
      
    </div>
  );
}



