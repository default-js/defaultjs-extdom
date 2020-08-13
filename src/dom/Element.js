import extendPrototype from "../utils/ExtendPrototype";
import QuerySupport from "./extentions/QuerySupport";
import AttributeSupport from "./extentions/AttributeSupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(Element,QuerySupport, AttributeSupport, ManipulationSupport);