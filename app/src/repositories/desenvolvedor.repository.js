import Desenvolvedor from "../models/desenvolvedor.model";
import Repository from "./repository";

class DesenvolvedorRepository extends Repository {}
DesenvolvedorRepository.endpoint = "desenvolvedores";
DesenvolvedorRepository.model = Desenvolvedor;
export default DesenvolvedorRepository;
