/**
 * Adds val() to HTMLInputElement.
 *
 * ValueSupport picks the handling by the type of the input, so a checkbox and a
 * radio are read by their checked state while every other input is read by its
 * value.
 */
import extendPrototype from "../utils/ExtendPrototype";
import ValueSupport from "./extentions/ValueSupport";


extendPrototype(HTMLInputElement,ValueSupport);