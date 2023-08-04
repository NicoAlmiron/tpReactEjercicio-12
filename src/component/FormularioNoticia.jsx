import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormSelect } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticia = () => {
  const [listaNoticias, setListaNoticia] = useState([]);
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("ar");

  useEffect(() => {
    consultarApi();
  }, [category, country]);

  const consultarApi = async () => {
    try {
      const categorias =
        "https://newsdata.io/api/1/news?apikey=pub_26951a1e34a6e654eea667e0cbda989db6e59";
      const link = categorias + "&category=" + category + "&country=" + country;
      const respuesta = await fetch(link);

      const noticias = await respuesta.json();

      console.log(noticias.results[0]);

      if (noticias.results[0] !== undefined) {
        setListaNoticia([...listaNoticias, await noticias.results[0]]);
      } else {
        alert(
          "no se encontraron noticias, pruebe intentar en otra categoria o pais"
        );
      }

      console.log(listaNoticias);
      console.log(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="border border-2 border-danger rounded-3 shadow">
      <article className="p-5 border border-bottom bg-danger rounded-3">
        <Form className="d-flex flex-column flex-md-row">
          <FormGroup className="d-flex justify-content-between align-items-between mb-3 me-md-3">
            <h5 className="fw-light text-white me-md-3">
              Buscar por categoria:
            </h5>
            <FormSelect
              placeholder="Categorias"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="business">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="environment">Medio Ambiente</option>
              <option value="food">Comida</option>
              <option value="health">Salud</option>
              <option value="politics">Politica</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnologia</option>
              <option value="top">Top</option>
              <option value="tourism">Turismo</option>
              <option value="world">Actualidad</option>
            </FormSelect>
          </FormGroup>
          <FormGroup className="d-flex justify-content-between align-items-between mb-3">
            <h5 className="fw-light text-white me-md-3">Buscar por pais: </h5>
            <FormSelect
              placeholder="Pais"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="af">Afganistán</option>
              <option value="al">Albania</option>
              <option value="dz">Argelia</option>
              <option value="ao">Angola</option>
              <option value="ar">Argentina</option>
              <option value="au">Australia</option>
              <option value="at">Austria</option>
              <option value="az">Azerbaiyán</option>
              <option value="bd">Bangladesh</option>
              <option value="bb">Barbados</option>
              <option value="by">Bielorrusia</option>
              <option value="be">Bélgica</option>
              <option value="bm">Isla Bermudas</option>
              <option value="bo">Bolivia</option>
              <option value="ba">Bosnia</option>
              <option value="br">Brasil</option>
              <option value="bg">Bulgaria</option>
              <option value="bf">Burkina Fasco</option>
              <option value="kh">Canboya</option>
              <option value="cm">Camerúm</option>
              <option value="ca">Canadá</option>
              <option value="ky">Islas Caimán</option>
              <option value="cl">Chile</option>
              <option value="co">Colombia</option>
              <option value="cr">Costa Rica</option>
              <option value="hr">Croacia</option>
              <option value="cu">Cuba</option>
              <option value="cy">Chipre</option>
              <option value="cz">República Checa</option>
              <option value="dk">Dinamarca</option>
              <option value="do">República Dominicana</option>
              <option value="cd">República Democrática del Congo</option>
              <option value="ec">Ecuador</option>
              <option value="eg">Egipto</option>
              <option value="sv">El Salvador</option>
              <option value="ee">Estonia</option>
              <option value="et">Etiopia</option>
              <option value="fi">Finlandia</option>
              <option value="fr">Francia</option>
              <option value="ga">Gabón</option>
              <option value="ge">Georgia</option>
              <option value="de">Alemania</option>
              <option value="gh">Ghana</option>
              <option value="gr">Grecia</option>
              <option value="gt">Guatemala</option>
              <option value="ht">Haití</option>
              <option value="hn">Honduras</option>
              <option value="hk">Hong Kong</option>
              <option value="hu">Hungria</option>
              <option value="is">Islandia</option>
              <option value="in">India</option>
              <option value="id">Indonesia</option>
              <option value="iq">Irak</option>
              <option value="ie">Irlanda</option>
              <option value="il">Israel</option>
              <option value="it">Italia</option>
              <option value="jm">Jamaica</option>
              <option value="jp">Japón</option>
              <option value="kz">Kazajstán</option>
              <option value="lb">Libano</option>
              <option value="ly">Libia</option>
              <option value="lt">Lituania</option>
              <option value="mg">Madagascar</option>
              <option value="my">Malasia</option>
              <option value="ml">Mali</option>
              <option value="mx">México</option>
              <option value="mn">Mongolia</option>
              <option value="ma">Marruecos</option>
              <option value="nl">Holanda</option>
              <option value="nz">Nueva Zelanda</option>
              <option value="ng">Nigeria</option>
              <option value="kp">Corea del Norte</option>
              <option value="no">Noruega</option>
              <option value="pk">Pakistán</option>
              <option value="pa">Panamá</option>
              <option value="py">Paraguay</option>
              <option value="pe">Perú</option>
              <option value="pl">Polonia</option>
              <option value="pt">Portugal</option>
              <option value="pr">Puerto Rico</option>
              <option value="ru">Rusia</option>
              <option value="sa">Arabia Saudita</option>
              <option value="rs">Serbia</option>
              <option value="sg">Singapur</option>
              <option value="sk">Eslovaquia</option>
              <option value="so">Somalia</option>
              <option value="za">Sudáfrica</option>
              <option value="kr">Corea del Sur</option>
              <option value="es">España</option>
              <option value="se">Suecia</option>
              <option value="ch">Suiza</option>
              <option value="sy">Siria</option>
              <option value="tw">Taiwán</option>
              <option value="th">Tailandia</option>
              <option value="tn">Túnez</option>
              <option value="ua">Ucrania</option>
              <option value="ae">Emiratos Árabes Unidos</option>
              <option value="uy">Uruguay</option>
              <option value="ve">Venenzuela</option>
              <option value="vi">Vietnam</option>
              <option value="zw">Zimbabue</option>
            </FormSelect>
          </FormGroup>
        </Form>
      </article>
      <ListaNoticias listaNoticias={listaNoticias}></ListaNoticias>
    </section>
  );
};

export default FormularioNoticia;
