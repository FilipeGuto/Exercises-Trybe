import { SUBMIT_PERSONAL_INFO, SUBMIT_PROFESSIONAL_INFO } from '../actions/action';

const INITIAL_STATE = {
  personalInputs: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  professionalInputs: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
  children: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_PERSONAL_INFO:
    return { ...state, personalInputs: action.payload };
  case SUBMIT_PROFESSIONAL_INFO:
    return { ...state, professionalInputs: action.payload };
  default:
    return state;
  }
};

export default reducer;
