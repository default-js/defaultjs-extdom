/**
 * Adds val() to HTMLSelectElement.
 *
 * ValueSupport reads a select by its selected options, so val() gives an array of
 * their values and takes one to select them again.
 */
import extendPrototype from "../utils/ExtendPrototype";
import ValueSupport from "./extentions/ValueSupport";


extendPrototype(HTMLSelectElement,ValueSupport);