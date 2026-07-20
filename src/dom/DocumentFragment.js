/**
 * Adds query and content functions to DocumentFragment.
 *
 * A ShadowRoot is a DocumentFragment, so a shadow root can be searched and filled
 * the same way as the fragment create() returns.
 */
import extendPrototype from "../utils/ExtendPrototype";
import QuerySupport from "./extentions/QuerySupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(DocumentFragment, QuerySupport, ManipulationSupport);




