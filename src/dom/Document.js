import extendPrototype from "../utils/ExtendPrototype";
import QuerySupport from "./extentions/QuerySupport";
import ReadyEventSupport, { READYEVENT } from "./extentions/ReadyEventSupport";

extendPrototype(Document, QuerySupport, ReadyEventSupport);

document.addEventListener("DOMContentLoaded", () => document.trigger(READYEVENT));



