import { connect } from "react-redux";
import NiveisPage from "../pages/niveis.page";
import { fetch, create, update, remove } from "../reducers/nivel/nivelSlice";
import NivelRepository from "../repositories/nivel.repository";

const mapStateToProps = (state) => ({
  niveis: state.nivel.values,
  nivel: state.nivel.values
});

const mapDispatchToProps = (dispatch) => ({
  fetchNivel: () => NivelRepository.fetch().then((niveis) => dispatch(fetch(niveis))),
  create: (payload) => NivelRepository.create(payload).then((nivel) => dispatch(create(nivel))),
  update: (payload) =>
    NivelRepository.update(payload).then((nivel) => {
      console.log(nivel);
      dispatch(update(nivel));
    }),
  remove: (payload) => NivelRepository.remove(payload).then(() => dispatch(remove(payload._id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(NiveisPage);
