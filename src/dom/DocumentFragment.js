import extendPrototype from "../utils/ExtendPrototype";
import QuerySupport from "./extentions/QuerySupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(DocumentFragment, QuerySupport, ManipulationSupport);




