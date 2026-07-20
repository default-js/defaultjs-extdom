/**
 * Adds query and ready functions to Document, and triggers the ready event.
 *
 * The event is triggered once the dom is parsed. A ready function registered
 * after that is not lost, as ready() triggers the event again when the document
 * is already complete.
 */
import extendPrototype from "../utils/ExtendPrototype";
import QuerySupport from "./extentions/QuerySupport";
import ReadyEventSupport, { READYEVENT } from "./extentions/ReadyEventSupport";

extendPrototype(Document, QuerySupport, ReadyEventSupport);

document.addEventListener("DOMContentLoaded", () => document.trigger(READYEVENT));



