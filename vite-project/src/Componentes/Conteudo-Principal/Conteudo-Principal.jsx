import Form_Contato from "../Form-Contato/Form-Contato"
import Habilidades from "../Habilidades/Habilidades"
import Info_Pessoal from "../Info-Pessoal/Info-Pessoal"

function Conteudo_Principal(){
    return(
        <div class="mainInfo">
            <section id="info">
                <Info_Pessoal/>
                <Habilidades/>
            </section>
            <Form_Contato/>
        </div>
    )
}

export default Conteudo_Principal