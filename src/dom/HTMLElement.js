import extendPrototype from "../utils/ExtendPrototype";
import HtmlClassSupport from "./extentions/HtmlClassSupport";
import ShowHideSupport from "./extentions/ShowHideSupport";


extendPrototype(HTMLElement, HtmlClassSupport, ShowHideSupport);