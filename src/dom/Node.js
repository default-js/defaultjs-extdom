/**
 * Adds data and content functions to Node.
 *
 * Node is the common base of elements, text nodes and fragments, so data() and
 * the insert functions work on all of them, not only on elements.
 */
import extendPrototype from "../utils/ExtendPrototype";
import DataSupport from "./extentions/DataSupport";
import ManipulationSupport from "./extentions/ManipulationSupport";

extendPrototype(Node,DataSupport,ManipulationSupport);