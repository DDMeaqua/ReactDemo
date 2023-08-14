import { getImageUrl } from './utils.js';

function Profile({name,src,alt,width,height,Profession,Awards,txt,Discovered}){
  return <>
  <section className="border-2 p-3 m-3 rounded-lg border-black">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(src)}
          alt={alt}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {Profession}
          </li>
          <li>
            <b>Awards: {Awards} </b> 
            ({txt})
          </li>
          <li>
            <b>Discovered: </b>
            {Discovered}
          </li>
        </ul>
      </section>
  </>
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile name={'Maria Skłodowska-Curie'} src={'szV5sdG'} alt={"Maria Skłodowska-Curie"} width={70} height={70} Profession={"physicist and chemist"} Awards={4} txt={"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"} Discovered={"polonium (element)"} />

      <Profile name={'Katsuko Saruhashi'} src={'YfeOqp2'} alt={"Katsuko Saruhashi"} width={70} height={70} Profession={"geochemist"} Awards={2} txt={"Miyake Prize for geochemistry, Tanaka Prize"} Discovered={"a method for measuring carbon dioxide in seawater"} />
  
    </div>
  );
}
