import Nivel from "../models/nivel.model";
import Repository from "./repository";

class NivelRepository extends Repository {}
NivelRepository.endpoint = "niveis";
NivelRepository.model = Nivel;
export default NivelRepository;
