/**
 * Adds val() to HTMLTextAreaElement.
 *
 * A textarea matches none of the special input types, so ValueSupport falls back
 * to reading and writing its value - and triggers an input event when it is set,
 * the same as any other field.
 */
import extendPrototype from "../utils/ExtendPrototype";
import ValueSupport from "./extentions/ValueSupport";


extendPrototype(HTMLTextAreaElement, ValueSupport);
