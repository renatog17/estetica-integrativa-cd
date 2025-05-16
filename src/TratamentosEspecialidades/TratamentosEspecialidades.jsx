import { ImArrowRight2 } from "react-icons/im";
import "./TratamentosEspecialidades.css"

export default function TratamentosEspecialidades(){
    const servicesList = [
    {
        name: "Toxina Botulínica (Botox)",
        description: "Na face e no pescoço é tudo que você precisa nesse verão para ficar veraneada",
    },
    {
        name:"Novo serviço",
        description:"Descrição do novo serviço"
    },
    {
        name: "Preenchimento Labial",
        description: "Lábios mais volumosos e simétricos com naturalidade e segurança.",
    },
    {
        name: "Limpeza de Pele",
        description: "Elimine impurezas e sinta sua pele renovada.",
    },
    {
        name: "Peeling Químico",
        description: "Melhora a textura da pele, reduz manchas e linhas finas.",
    },
    {
        name: "Microagulhamento",
        description: "Estimula colágeno e melhora o aspecto da pele.",
    },
    {
        name: "Skinbooster",
        description: "Hidratação profunda e revitalização facial.",
    },
    {
        name: "Laser Facial",
        description: "Reduz rugas e manchas com tecnologia a laser.",
    },
    {
        name: "Depilação a Laser",
        description: "Remoção de pelos de forma duradoura e segura.",
    },
    {
        name: "Tratamento para Melasma",
        description: "Clareamento eficaz e seguro de manchas escuras.",
    },
    {
        name: "Bioestimulador de Colágeno",
        description: "Melhore a firmeza da pele com resultados duradouros.",
    }
    ];

    return (
        <div className="tratamentos-especialidades">
            <p className="par-intro">Tratamentos e especialidades</p>
            <h1 className="titulo" >Aqui começa a sua jornada de autocuidado</h1>
            <div className="services">
                {servicesList.map((service, index) => (
                    <div className="service" key={index}>
                    <h1 className="service-name">{service.name}</h1>
                    <p>{service.description}</p>
                    <div className="saiba-mais">
                        <a href="#">
                        Saiba Mais <ImArrowRight2 />
                        </a>
                    </div>
                    </div>
                ))}

               
            </div>

            <div className="bloco-final">
                <p>Escolha a tecnologia e o procedimento que melhor se encaixa <strong>naquilo que você procura quando o assunto é autocuidado</strong></p>
                <a className="button"> Agende Seu horário </a>
            </div>
        </div>
    )
}