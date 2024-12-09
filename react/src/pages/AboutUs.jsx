import { Link, useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="team">
      <h1>About us</h1>
      <div className="teamMembers">
        <div className="member1">
          <img src="../../public/manson.jpg" alt="Ines" />
          <h2>Ines</h2>
          <p>
            Restauradora de arte, con un ojo impecable para descifrar los
            secretos ocultos en las obras más antiguas. En secreto, es una
            hacker que infiltra redes protegidas para exponer verdades ocultas
            detrás de conflictos globales, utilizando sus habilidades para dar
            voz a los oprimidos y derribar la manipulación mediática.
          </p>
        </div>
        <div className="member2">
          <img src="../../public/VxV.jpg" alt="Ornella" />
          <h2>Ornella</h2>
          <p>Popular locutora de podcasts sobre cultura digital y activismo. Tras
            el micrófono, es una criptógrafa clandestina que desmantela campañas
            de desinformación y protege a activistas en las zonas más peligrosas
            del mundo. Su misión: viralizar la verdad y mostrar que el
            conocimiento puede ser una poderosa herramienta de revolución.
          </p>
        </div>
        <div className="member3">
          <img src="../../public/Bin laden.webp" alt="Vicente" />
          <h2>Vicente</h2>
          <p>Brillante escritor decidido a exponer la verdad oculta. Utiliza sus habilidades para infiltrarse en sistemas, luchando por la justicia y revelando lo que el poder intenta ocultar. Desde las sombras, manipula códigos para asegurar que la verdad salga a la luz.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
