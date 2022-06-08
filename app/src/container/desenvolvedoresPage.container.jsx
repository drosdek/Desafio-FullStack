import { connect } from "react-redux";
import DesenvolvedoresPage from "../pages/desenvolvedores.page";
import { fetch, create } from "../reducers/desenvolvedor/desenvolvedorSlice";
import { fetch as fetchNivel } from "../reducers/nivel/nivelSlice";
import DesenvolvedorRepository from "../repositories/desenvolvedor.repository";
import NivelRepository from "../repositories/nivel.repository";

const mapStateToProps = (state) => ({
  desenvolvedor: state.desenvolvedor.values,
  niveis: state.nivel.values
});

const mapDispatchToProps = (dispatch) => ({
  fetchNiveis: () => NivelRepository.fetch().then((niveis) => dispatch(fetchNivel(niveis))),
  fetchDev: () =>
    DesenvolvedorRepository.fetch().then((desenvolvedores) => dispatch(fetch(desenvolvedores))),
  create: (payload) =>
    DesenvolvedorRepository.create(payload).then((desenvolvedor) => dispatch(create(desenvolvedor)))
});

export default connect(mapStateToProps, mapDispatchToProps)(DesenvolvedoresPage);
