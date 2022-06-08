import { connect } from "react-redux";
import DesenvolvedoresPage from "../pages/desenvolvedores.page";
import { fetch, create, update, remove } from "../reducers/desenvolvedor/desenvolvedorSlice";
import { fetch as fetchNivel } from "../reducers/nivel/nivelSlice";
import DesenvolvedorRepository from "../repositories/desenvolvedor.repository";
import NivelRepository from "../repositories/nivel.repository";

const mapStateToProps = (state) => ({
  desenvolvedores: state.desenvolvedor.values,
  desenvolvedor: state.desenvolvedor.values,
  niveis: state.nivel.values
});

const mapDispatchToProps = (dispatch) => ({
  fetchNiveis: () => NivelRepository.fetch().then((niveis) => dispatch(fetchNivel(niveis))),
  fetchDev: () =>
    DesenvolvedorRepository.fetch().then((desenvolvedores) => dispatch(fetch(desenvolvedores))),
  create: (payload) =>
    DesenvolvedorRepository.create(payload).then((desenvolvedor) =>
      dispatch(create(desenvolvedor))
    ),
  update: (payload) =>
    DesenvolvedorRepository.update(payload).then((desenvolvedor) => {
      console.log(desenvolvedor);
      dispatch(update(desenvolvedor));
    }),
  remove: (payload) =>
    DesenvolvedorRepository.remove(payload).then(() => dispatch(remove(payload._id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(DesenvolvedoresPage);
