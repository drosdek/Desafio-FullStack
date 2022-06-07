import { connect } from "react-redux";
import Menu from "../components/menu/menu.component";
import { toggle } from "../reducers/menu/menuSlice";

const mapStateToProps = (state) => {
  const { isOpen } = state.menu;
  return { isOpen };
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
