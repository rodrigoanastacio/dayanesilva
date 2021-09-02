import styles from './styles.module.scss';

const Newsletter = (props) => {
  return (
    <div className={styles.newsletter}>
      <div>
        <h2>Faça parte da minha Lista VIP</h2>
      </div>
      <div>
        <p>
          Faça parte da minha lista exclusiva e receba conteúdos semanais sobre:
          negócios, empreendedorismo, marketing, posicionamento e imagem
          pessoal. Aqui quero compartilhar experiências, insights e novidades
          para voce construir uma marca FORTE no digital!
        </p>
        <form
          id="sib-form"
          method="POST"
          action="https://04c4e6f3.sibforms.com/serve/MUIEALcfYhQ6OY98UQxiExZs7K8a_Ed0ddpL7QkPdJE8wA0Jull5JCRDP0jAgNqEEubSLJRGKVlR4LeqpiGBl_cE6wKFiIVNJiWklUUeHHVs5Jy5eyUs4QNQ8JhOUrrULEqagDo0rxB_Xf90Kdpv-tC2sbQNF2AeMKZ5gymB-IR0WI3DPdXcx8AoTHVh7vmnwvAESFnznkOOVV-U"
        >
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            autoComplete="off"
            placeholder="E-mail"
            data-required="true"
            required
          />
          <button form="sib-form" type="submit">
            Cadastrar e-mail
          </button>

          <input type="hidden" name="locale" value="pt" />
          <input type="hidden" name="html_type" value="simple" />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
