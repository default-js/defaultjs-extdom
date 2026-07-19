/**
 * Adds query, attribute and content functions to Element.
 *
 * Query and attribute functions need a selectable node, which is why they sit
 * here and not on Node. ManipulationSupport is applied again although Element
 * inherits it from Node - that puts the functions on Element as own properties,
 * where the extensions of the more specific html types can find them.
 */
import extendPrototype from "../utils/ExtendPrototype";
import QuerySupport from "./extentions/QuerySupport";
import AttributeSupport from "./extentions/AttributeSupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(Element,QuerySupport, AttributeSupport, ManipulationSupport);