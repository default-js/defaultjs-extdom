/**
 * Adds class and visibility functions to HTMLElement.
 *
 * Both work on the style and the classList of a html element, which is why they
 * sit here and not on Element - an svg element has neither in the same way.
 */
import extendPrototype from "../utils/ExtendPrototype";
import HtmlClassSupport from "./extentions/HtmlClassSupport";
import ShowHideSupport from "./extentions/ShowHideSupport";


extendPrototype(HTMLElement, HtmlClassSupport, ShowHideSupport);