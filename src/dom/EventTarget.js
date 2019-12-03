import extendPrototype from "../utils/ExtendPrototype";
import EventSupport from "./extentions/EventSupport";

extendPrototype(EventTarget, EventSupport);